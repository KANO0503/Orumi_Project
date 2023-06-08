// openAI API
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

let $form = document.querySelector('.chat-form');
const $loadingScreen = document.querySelector('#loading-screen');


// 사용자의 질문
let question;

// 사용자의 질문을 객체를 만들어서 push
const makePrompt = function () {
    // 출발지 값 읽어오기
    let startInput = document.getElementById("start-point");
    let start = startInput.value;
  
    // 여행지 값 읽어오기
    let destinationInput = document.getElementById("destination");
    let destination = destinationInput.value;
  
    // 출발일 값 읽어오기
    let departInput = document.getElementById("depart-schedule");
    let depart = departInput.value;

    // 도착일 값 읽어오기
    let arriveInput = document.getElementById("arrive-schedule");
    let arrive = arriveInput.value;

    // 선호하는 여행테마 값 읽어오기
    let favoriteInputs = document.getElementsByName('tema');
    let favorite;
    for (let i =0; i < favoriteInputs.length; i++){
        if (favoriteInputs[i].checked) {
            favorite = favoriteInputs[i].value;
            break;
        }
    }

    // 차량 렌트 값 읽어오기
    let carRentInputs = document.getElementsByName("car-rent");
    let carRent;
    for (let i = 0; i < carRentInputs.length; i++) {
      if (carRentInputs[i].checked) {
        carRent = carRentInputs[i].value;
        break;
      }
    }
    
    // 메세지 전달 형식 : From user to API
    data.push({
      role: "user",
      content: `여행계획을 만들어줘. 출발일:${depart}, 도착일:${arrive}, 출발지:${start}, 여행지:${destination}, 선호하는여행테마:${favorite},자동차유무:${carRent} \n 이 내용을 기반으로 여행계획을 만들어줘`,
    });
    console.log(data);
}

// 질문과 답변 저장
let data = [
    {
        role: 'system',
        content: 'assistant는 사용자의 여행지에 따라 Day1, Day2, Day3 형식으로 여행 계획을 구체적으로 생성해주는 일본 여행 전문가이다.'
    },
    {
        role: 'user',
        content: '여행지는 훗카이도, 홋카이도, 도쿄, 오사카, 교토, 후쿠오카, 오키나와, 히로시마, 나고야 등등'
    },
    {
        role: 'assistant',
        content:
            'user가 입력한 ${destination}에 따라 여행 계획을 알려줘.'
    },
    {
        role: 'user',
        content: '선호하는 테마 식도락'
    },
    {
        role: 'assistant',
        content:
            '사용자가 입력하는 일본지역에 따라 그 지역의 구글 지도 평점 3.8 이상인 식당을 알려줘.'
    },
    {
        role: 'user',
        content: '선호하는 테마 자연 풍경'
    },
    {
        role: 'assistant',
        content:
            '사용자가 입력하는 일본지역에 따라 그 지역에 자연 풍경을 볼 수 있는 관광지로 알려줘.'
    },
    {
        role: 'user',
        content: '선호하는 여행테마 역사 유적'
    },
    {
        role: 'assistant',
        content:
            '사용자가 입력하는 일본지역에 따라 그 지역에 역사가 깊은 유적지나 박물관 위주로 알려줘.'
    },
    {
        role: 'user',
        content: '선호하는 여행테마 액티비티'
    },
    {
        role: 'assistant',
        content:
            '사용자가 입력하는 일본지역에 따라 그 지역에서 이용할 수 있는 액티비티 한 레크레이션 활동을 알려줘.'
    },
    {
        role: 'user',
        content: '선호하는 여행테마 쇼핑'
    },
    {
        role: 'assistant',
        content:
            '사용자가 입력하는 일본지역에 따라 그 지역에서 쇼핑할 수 있는 백화점 아울렛으로 알려줘.'
    },
    {
        role: 'user',
        content: '온천 여행을 하고싶어.'
    },
    {
        role: 'assistant',
        content:
            '사용자가 입력하는 일본지역에 따라 그 지역에 있는 온천을 알려줘.'
    },
    {
        role: 'user',
        content: '차량 렌트를 할거야.'
    },
    {
        role: 'assistant',
        content:
            '차량 렌트를 한다면 사용자가 입력하는 일본지역의 드라이브 코스를 알려줘.'
    }
];


// api 요청보내는 함수
const apiPost = async () => {
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((res) => {
        printAnswer(res.choices[0].message.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  // submit
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    makePrompt();
    apiPost();
  });
  
  // 화면에 답변 그려주는 함수
  const printAnswer = (answer) => {
    let chat_content = document.getElementById("chat-content");
    chat_content.value = answer;
  };
  