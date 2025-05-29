import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SongModule {
constructor(
  @Inject('Id') public Id: number,
  @Inject('FileName') public FileName: string,
    @Inject('MimeType') public MimeType: string,
    @Inject('Size') public Size: number,
    @Inject('FilePath') public FilePath: string,
    @Inject('UserId') public UserId: number,
    @Inject('Cost') public Cost: number,
  ) { }

}
