const parseEnv = () => {
  const data = Object.entries(process.env)
    .filter(([key, value]) => key.includes('RSS_'));

  const result = data.reduce((acc, includedArrAsValue, index) => {
      const [key, value] = includedArrAsValue;
      const baseNotLastTemplate = acc + key + '=' + value;

      return data.length - 1 === index 
        ? baseNotLastTemplate
        : baseNotLastTemplate + '; ';
   }, '');

   console.log(result);
};

parseEnv();