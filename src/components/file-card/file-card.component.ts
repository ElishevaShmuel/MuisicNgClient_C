import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SongModule } from '../../models/song/song.module';
import { SongsService } from '../../services/songs/songs.service';


@Component({
  selector: 'app-file-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './file-card.component.html',
  styleUrl: './file-card.component.css'
})
export class FileCardComponent implements OnDestroy {
  @Input() song!: SongModule;
  @Input() isMine: boolean = false;

  isPlaying = false;
  private audio: HTMLAudioElement | null = null;


  constructor(
    private musicService: SongsService,
  ) {}

  async togglePlay(): Promise<void> {
    if (!this.audio) {
      try {
        console.log("Attempting to play song:", this.song.fileName);
        
        (await this.musicService.getDownloadUrl(this.song.fileName)).subscribe({
          next: (response) => {
            console.log("Audio URL:", response.url);
            this.audio = new Audio(response.url);
            this.audio.addEventListener('ended', () => {
              this.isPlaying = false;
            });
            
            if (this.isPlaying) {
              this.audio.pause();
            } else {
              this.audio.play();
            }
            this.isPlaying = !this.isPlaying;
          },
          error: (err) => {
            console.error("שגיאה בהשמעה", err);
          }
        });
        return;
      } catch (err) {
        console.error("שגיאה בהשמעה", err);
        return;
      }
    }

    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  async downloadFile(): Promise<void> {
    console.log("wwwwwwwwwww");
    
   
      (await this.musicService.downloadFile(this.song.FileName)).subscribe({
        next: (blob) => {
          const blobUrl = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = blobUrl;
          link.setAttribute("download", this.song.FileName || "audio.mp3");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(blobUrl);
          
        
        },
        error: (err) => {
          console.error('שגיאה בהורדה:', err);
        }
      });
    }
  

  ngOnDestroy(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
