const db = {
  artists: [
    { 
      artist_id: 1, 
      artist_name: 'Black Sabbath', 
      albums: [{ 
        name: 'Black Sabbath',
        year: 1970
      }],
      styles: ['Heavy Metal', 'Hard Rock', 'Blues'],
      influences: ['Cream', 'the Beatles', 'Fleetwood Mac'],
    },
        
    { 
      artist_id: 2, 
      artist_name: 'Metallica', 
      albums: [{ 
        name: 'Kill Em All',
        year: 1983
      }],
      styles: ['Heavy Metal', 'Thrash Metal', 'Hard Rock'],
      influences: ['Diamond Head', 'Judas Priest', 'Iron Maiden'],
    },
    { 
      artist_id: 3, 
      artist_name: 'Judas Priest', 
      albums: [{ 
        name: 'Rocka Rolla',
        year: 1974
      }],
      styles: ['Heavy Metal', 'Hard Rock'],
      influences: ['Black Sabbath', 'Deep Purple', 'Led Zeppelin'],
    },
  ],
}

export default db; 