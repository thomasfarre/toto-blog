const Photos = ({ images }) => {
  return (
    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img
        loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          src={images.gallery[0].src}
          width={images.gallery[0].attributes.width}
          height={images.gallery[0].attributes.height}
          alt=""
        />
      </div>
      <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
        <img
        loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          src={images.gallery[1].src}
          width={images.gallery[1].attributes.width}
          height={images.gallery[1].attributes.height}
          alt=""
        />
      </div>
      <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img
        loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          src={images.gallery[2].src}
          width={images.gallery[2].attributes.width}
          height={images.gallery[2].attributes.height}
          alt=""
        />
      </div>
      <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img
        loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          src={images.gallery[3].src}
          width={images.gallery[3].attributes.width}
          height={images.gallery[3].attributes.height}
          alt=""
        />
      </div>
      <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 -rotate-2">
        <img
        loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          src={images.gallery[4].src}
          width={images.gallery[4].attributes.width}
          height={images.gallery[4].attributes.height}
          alt=""
        />
      </div>
    </div>
  );
};

export default Photos;
