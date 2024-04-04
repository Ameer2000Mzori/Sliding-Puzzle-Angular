interface NavListItem {
  title: string;
  url: string;
  id: number;
}

export const navListData: NavListItem[] = [
  {
    title: 'start game',
    url: '/game',
    id: 1,
  },
  {
    title: 'scores',
    url: '/scores',
    id: 2,
  },
  {
    title: 'About',
    url: '/about',
    id: 3,
  },
];
