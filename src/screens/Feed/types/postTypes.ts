export type TResponsePosts = {
  data: {
    count: number;
    items: TPost[];
  };
};
export type TPost = {
  id: number;
  time: number;
  likes: number;
  message: string;
  union: {name: string};
  photos: [
    {
      photo: {
        xs: {
          src: string;
          width: number;
          height: number;
        };
      };
    },
  ];
};
