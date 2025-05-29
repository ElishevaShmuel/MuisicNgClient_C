import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subject, takeUntil, startWith, map, combineLatest } from 'rxjs';

import { FileCardComponent } from '../file-card/file-card.component';
import { SongModule } from '../../models/song/song.module';
import { SongsService } from '../../services/songs/songs.service';
import { log } from 'node:console';

@Component({
  selector: 'app-all-files-list',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatProgressSpinnerModule,
    FileCardComponent
  ],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent implements OnInit, OnDestroy {
  songs: SongModule[] = [];
  filteredSongs: SongModule[] = [];
  searchTerm: string = '';
  loading: boolean = false;
  error: string = '';
  
  private destroy$ = new Subject<void>();

  constructor(
    private musicService: SongsService,
  ) {}

  ngOnInit(): void {
    this.loadFiles();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async loadFiles(): Promise<void> {
    this.loading = true;
    this.error = '';
    
    (await this.musicService.getFiles())
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (files) => {
          console.log('Songs loaded:', files);
          this.songs = files;
          this.filterSongs();
          this.loading = false;          
        },
        error: (err) => {
          console.error('Error loading files:', err);
          this.error = 'שגיאה בטעינת הקבצים';
          this.loading = false;
        }
      });
  }


  onSearchChange(): void {
    this.filterSongs();
  }

  filterSongs(): void {
    if (!this.searchTerm.trim()) {
      this.filteredSongs = [...this.songs];
    } else {
      this.filteredSongs = this.songs.filter(song =>
        song.fileName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      
      
    }
    console.log('Filtered songs:', this.filteredSongs);
    console.log(this.filteredSongs.map(song => ({ id: song.id, fileName: song.fileName })));

  }

  trackBySongId(index: number, song: SongModule): number | string {
    return song.id || song.fileName || index;
  }
  
}