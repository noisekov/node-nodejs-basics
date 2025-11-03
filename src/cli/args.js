const parseArgs = () => {
  const [dir1, dir2, ...args] = process.argv;
  const result = args.reduce((acc, val, index) => {
    if (val.includes('--')) {
      return acc + val.replace('--', '');
    }

    const baseNotLastTemplate = acc + ' is ' + val;
    return args.length - 1 === index 
      ? baseNotLastTemplate
      : baseNotLastTemplate + ', ';
  }, '');

  console.log(result)
};

parseArgs();