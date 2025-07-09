export const useTruncText = () => {
  const truncate = (str: string, limit = 5): string => {
    const words = str.split(' ');
    if (words.length <= limit) return str;
    return words.slice(0, limit).join(' ') + '...';
  };

  return {
    truncate
  };
};
