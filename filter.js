// const coding =["js","rb","py","cpp","c#","java"]

// const values = coding.forEach( (item)=>{
  
//     //console.log(item);
//     return item
// })

// console.log(values);


// const myNums= [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num)=>{ return num>4
    
// } )    //filter basics
  //console.log(newNums);

  // const myskill = [1,2,3,4,5,6,7,8,9,10]
  // const newSkill = myskill.forEach( (num) => {
  //   if(num>4){
  //     newSkill.push(num)
  //   }
  // })
  // console.log(newSkill);

  const books = [
    {title: 'Book One', genre: 'Fiction', publish: '1981', edition: '2004'},

    {title: 'Book two', genre: ' Non-Fiction', publish: '1981', edition: '2005'},

    {title: 'Book three', genre: 'Science', publish: '1945', edition: '2006'},

    {title: 'Book four', genre: 'History', publish: '1921', edition: '2007'},

    {title: 'Book five', genre: 'Fiction', publish: '1941', edition: '2008'},

    {title: 'Book Six', genre: 'Non-Fiction', publish: '1991', edition: '2009'},

    {title: 'Book Seven', genre: 'Science', publish: '1961', edition: '2010'},

    {title: 'Book Eight', genre: 'History', publish: '1989', edition: '2011'},

    {title: 'Book Nine', genre: 'Fiction', publish: '1990', edition: '2012'},

    {title: 'Book Ten', genre: 'Non-Fiction', publish: '1931', edition: '2014'},
  ];

  const userBooks = books.filter((bk)=>bk.genre==='Fiction')

   const newuserbooks = books.filter( (bk) => {
    return bk.publish >= 1950 && bk.genre === 'Non-Fiction'})

  // console.log(userBooks);
  // console.log(newuserbooks);


  const myNumbers= [1,2,3,4,5,6,7,8,9,10]

  const newnums =myNumbers.map((num) =>{return num +10})

  //console.log(newnums);

  const mykums =[22,33,44,11,55,66,77,88,99,110]

  // const pynewnumber =pnumber.forEach((num)=> num * 2 )
  // //console.log(pynewnumber);
const myNums =[22,33,44,11,55,66,77,88,99,110]
    const newNums = myNums
    .map((num)=>num *10)
    .map((num)=>num +1)
    .filter((num)=>num>=40 )
  //console.log(newNums);

  const knums =[1,2,3]
  const initial = 0
  // const mytotal =knums.reduce(function(acc,cuval){
  //   console.log(`accumulator:${acc} and curentvalue:${cuval}`);
  //   return acc + cuval
  // },0)
  const mytotal =knums.reduce((acc,curval)=>acc+curval,1)
  //console.log(mytotal);


  const shoppingCart =[{itemName: "js course",Price:2999},
    {itemName:"py course",Price:999},{itemName:"android",Price:3999},
    {itemName:"data course",Price:12999},
  ]

  const pricetopay=shoppingCart.reduce((acc,item)=> acc + item.Price,0)
  console.log(pricetopay);