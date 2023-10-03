export function convertImageToBase64(
  file: File,
  callback: (base: string | null) => void
) {
  const reader = new FileReader();
  reader.onload = (event) => {
    if (event.target) {
      const base64 = event.target.result as string;
      callback(base64);
    } else {
      callback(null);
    }
  };
  reader.readAsDataURL(file);
}
