function myName(n) {
  for (let i = 0; i < n; i++) {
    if (i%3===0 && i%5===0) {
      console.log('Kautzar Alibani');
    }else if (i%3===0) {
      console.log('Kautzar');
    }else if (i%5===0) {
      console.log('Alibani');
    }else {
      console.log(i);
    }
  }
}

myName(100)
