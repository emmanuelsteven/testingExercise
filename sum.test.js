const stringLength = require('./sum');

test('check if 1 plus 2 equals 3', () => {
  expect(stringLength('pets')).toBe(4);
});

test('check if 1 plus 2 equals 3', () => {
    expect(() =>{ 
        stringLength('')
    }).toThrow('input string greater than 1 char')
  });
  

  test('check if 1 plus 2 equals 3', () => {
    expect(() =>{ 
        stringLength('kokokobukooloriburuku')
    }).toThrow('string not more than 10 char')
  });