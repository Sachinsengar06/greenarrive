const CLOUD_NAME = "dlagykegp";

export function cloudinaryUrl(
  publicId: string,
  width: number
) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width},c_fill/${publicId}`;
}
