// 顺序
function enc(list) {
  list.forEach((item) => {
    const len = item.length;
    let arr = new Array(len);
    item = item.reverse();
    for (let i = 0; i < len; i++) {
      const index = i + 3 < len ? i + 3 : len - (i + 3);
      arr[i] = item[index];
    }
    item = arr;
  });
  const nowlist = list.reverse();
  return nowlist;
}
function dec(list) {}

function insertData(db, table, handle, obj, condition) {
  console.log(db);
}
function newArrray(len) {
  let arr = new Array();
  for (let i = 0; i < len; i++) {
    arr.push('');
  }
  return arr;
}

const oldStr = "i don't care who are you";
function trans(str, len) {
  return str.split(' ').map((item) => {
    const childItem = newArrray(len);
    item.split('').forEach((child, i) => (childItem[i] = child));
    return childItem;
  });
}
const list = trans(oldStr, 10);
console.log(enc(trans(oldStr, 10)));
function doing(list, len, len2) {
  let str = '';
  for (let i = 0; i < len; i++) {
    let newStr = '';
    for (let j = 0; j < len2; j++) {
      newStr = newStr + list[i][j] || '';
    }
    str = str + newStr + ' ';
  }
  console.log('str: ', str);
}
doing(list, list.length, 10);
// 乱序
