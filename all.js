let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
  ];

let travelAllCard =document.querySelector('.travelAllCard');
let str="";
function init(){
  str='';
data.forEach(function(item,index){
  str +=`<li class="travelCard">
    <div class="travelImg">
    <img src=${data[index].imgUrl} alt="">
    </div>
    <div class='travelCardText'>
      <div class="travelTitle">
      <h3>${data[index].name}</h3>
      </div>
        <div class="travelDetail">${data[index].description}</div>
        <div class='travelFooter'>
          <div class='travelGroup'>
          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
          剩下最後 ${data[index].group} 組
          </div>
          <div class='travelPrice'>
          <span>TWD</span><span class='dollar'><i class="fa fa-usd" aria-hidden="true"></i>${data[index].price}</span>
          </div>
        </div>
  </div>
  <li/>`
})
  travelAllCard.innerHTML=str;
  }

init();

let ticketName=document.querySelector('#ticketName');
let ticketImg=document.querySelector('#ticketImg');
let touristSpot=document.querySelector('#touristSpot');
let ticketPrice=document.querySelector('#ticketPrice');
let ticketNum=document.querySelector('#ticketNum');
let ticketRank=document.querySelector('#ticketRank');
let ticketDesc=document.querySelector('#ticketDesc');

//點擊按鈕觸發
let addBtn=document.querySelector('.btn');
addBtn.addEventListener('click',function(e){
  e.preventDefault();
  
  //檢查null或空值
  if(ticketName.value!=null && ticketImg.value!=null && touristSpot.value!=null && ticketDesc.value!=null && ticketNum.value!=null && ticketPrice.value!=null && ticketRank.value!=null && ticketName.value.trim().length !=0 && ticketImg.value.trim().length !=0 && touristSpot.value.trim().length !=0 && ticketDesc.value.trim().length !=0 && ticketNum.value.trim().length !=0 && ticketPrice.value.trim().length !=0 && ticketRank.value.trim().length !=0){
   data.push({
      "id": data.length,
      "name": ticketName.value,
      "imgUrl": ticketImg.value,
      "area": touristSpot.value,
      "description": ticketDesc.value,
      "group": ticketNum.value,
      "price": ticketPrice.value,
      "rate": ticketRank.value
    })
    //push完再把表格清空
      ticketName.value=null;
      ticketImg.value=null;
      touristSpot.value='';
      ticketPrice.value=null;
      ticketNum.value=null;;
      ticketRank.value=null;
      ticketDesc.value=null;
      init();
    }else {
      alert('有欄位沒輸入，請檢查');
    }

}) 