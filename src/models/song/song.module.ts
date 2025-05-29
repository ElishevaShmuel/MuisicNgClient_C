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
  @Inject('Id') public id: number,
  @Inject('FileName') public fileName: string,
    @Inject('MimeType') public mimeType: string,
    @Inject('Size') public size: number,
    @Inject('FilePath') public filePath: string,
    @Inject('UserId') public userId: number,
    @Inject('Cost') public cost: number,
  ) { }

}
