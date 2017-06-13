import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-album';


//Using @Injectable instead of @Service makes class available to our Injector
@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums() {
    return ALBUMS;
  }

  getAlbumById(albumId: number) {
    for (var i = 0; i < ALBUMS.length; i++) {
      if (ALBUMS[i].id === albumId) return ALBUMS[i];
    }
  }

}
