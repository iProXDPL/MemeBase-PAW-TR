function Button({ color, children }) {
  const base =
    "inline-block py-2 px-4 rounded-lg cursor-pointer transition-all duration-300";

  const styles = {
    green: base + " bg-lime-500 text-zinc-800 hover:bg-lime-600",
  };

  return <button className={styles[color.toLowerCase()]}>{children}</button>;
}

export default Button;
