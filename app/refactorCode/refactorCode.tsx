function discount(price: number, tier: string): number {
  switch (tier) {
    case "GOLD":
      return price * 0.8;
    case "SILVER":
      return price * 0.9;
    default:
      return price;
  }
}

// alasan refactor menjadi bentuk Typescript agar penggunaan props atau parameter lebih jelas dan tidak salah definisi tipe data,
// dan dengan menggunakan switch case, kode menjadi lebih mudah dibaca. Sebenarnya bisa
