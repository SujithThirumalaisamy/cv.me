export default function cloudFlareLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  // return `https://res.cloudinary.com/demo/image/upload/${params.join(
  //   ','
  // )}${src}`
  return `https://cdn.isujith.dev/${src}`;
}
