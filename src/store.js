import { reactive } from 'vue';

export const store = reactive({
  photos: [
    { title: 'Фото 1', url: 'https://images.wallpaperscraft.ru/image/single/kotiata_divan_koty_99559_1920x1080.jpg' },
    { title: 'Фото 2', url: 'https://images.wallpaperscraft.ru/image/single/kotiata_koty_pushistye_99165_1920x1080.jpg' },
    { title: 'Фото 3', url: 'https://img.desktopwallpapers.ru/animals/pics/wide/1920x1080/11df8cafe9ec1c78d09c33a050956249.jpg' },
  ],
  addPhoto(photo) {
    this.photos.push(photo);
  },
});
