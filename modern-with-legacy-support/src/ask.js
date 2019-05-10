export function ask(message) {
  return new Promise(resolve => {
    const result = confirm(message);

    resolve(result);
  });
} 
