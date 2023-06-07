// openAI API
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

let $form = document.querySelector(".chat-form");

// 사용자의 질문
let question;

// 사용자의 질문을 객체를 만들어서 push
const makePrompt = function () {
  // 국가/지역 값 읽어오기
  let cityInput = document.getElementById("chat-city");
  let city = cityInput.value;

  // 여행 기간 값 읽어오기
  let dateInput = document.getElementById("chat-date");
  let date = dateInput.value;

  // 희망 여행 테마 값 읽어오기
  let themeInput = document.getElementById("chat-theme");
  let theme = themeInput.value;

  // 자동차 유무 값 읽어오기
  let carOptionInputs = document.getElementsByName("car-option");
  let carOption;
  for (let i = 0; i < carOptionInputs.length; i++) {
    if (carOptionInputs[i].checked) {
      carOption = carOptionInputs[i].value;
      break;
    }
  }

  // 메세지 전달 형식 : From user to API
  data.push({
    role: "user",
    content: `여행계획을 만들어줘. 기간:${date}, 지역:${city}, 희망여행테마:${theme},자동차유무:${carOption} \n 이 내용을 기반으로 여행계획을 만들어줘`,
  });
  console.log(data);
};

// 질문과 답변 저장
let data = [
  {
    role: "system",
    content: "assistant는 전문적이고 친절한 1인 여행 플래너이다.",
  },
  {
    role: "user",
    content: "뚜벅이로 LA 일주일 여행 다녀오려고해. 여행 계획 짜줘.",
  },
  {
    role: "system",
    content:
      "자동차 없이 LA에서 일주일 동안 여행을 즐기기를 원한다면, 아래의 여행 계획을 참고하세요. 이것은 대중 교통과 도보로 이동하여 LA에서 인기있는 명소와 활동을 경험하는 다양한 활동을 포함하고 있습니다. Day 1: - 그리피스 천문대 (Griffith Observatory)에서 일출이나 일몰 감상. -할리우드 산책로 (Hollywood Walk of Fame)를 따라 산책하며 유명인들의 별을 구경. -저녁은 할리우드 혹은 로스파데나에서 맛있는 식사 즐기기. Day2: - 유니버셜 스튜디오 (Universal Studios)에서 한가한 아침을 보내고 신나는 놀이기구를 즐기기. - 월트 디즈니 콘서트 홀 (Walt Disney Concert Hall)에서 클래식 음악 회중 공연 감상. -그리피스 공원 (Griffith Park)에서 자전거를 빌려 돌아다니며 자연 경치 감상. - 저녁은 실버레이크 혹은 로스파데나의 레스토랑에서 현지 음식 즐기기. Day 3: - 샌타모니카 해변 (Santa Monica Beach)에서 해변 산책 및 일몰 감상. - 사운드 앤드 (Sound and)에서 서핑 레슨 받기 혹은 서핑을 관람하며 휴식하기. - 샌타모니카 제3거리 (Third Street Promenade)에서 쇼핑하고 식사하기.- 탑앵글스 (Topanga)에서 자연과 하이킹을 경험하기. Day 4: - 로스앤젤레스 카운티 미술관 (Los Angeles County Museum of Art) 방문하여 예술 작품 감상하기. - 멜로즈 애비뉴 (Melrose Avenue)에서 유니크한 상점과 벽화 구경하기. - 더 그로브 (The Grove)에서 쇼핑이나 레스토랑 즐기기. Day 5: - 그리피스 파크 (Griffith Park)으로 이동하여 그리피스 천문대에서 전망을 감상하고 하이킹하기. - 그리피스 옵시러스 (Griffith Observatory)에서 천문학 박물관 방문하기. -옵시러스 투어를 통해 로스앤젤레스 시내의 아름다운 전망 감상하기. 이것은 일반적인 여행 계획이며, 여행 일정과 활동은 제가 드린 일정표를 기반으로 개인의 선호도에 맞추어 변경하셔도 좋은 여행이 될 것이라고 생각합니다. 즐거운 여행 되세요 :) ",
  },
  {
    role: "user",
    content:
      "자동차 렌트할 예정이야. 3박 4일 제주도 여행 계획 짜줘. 나는 수상 스포츠를 좋아해",
  },
  {
    role: "system",
    content:
      "제주도에서 3박 4일 동안 수상 스포츠를 즐기며 다양한 명소를 방문하는 여행 계획을 제안해 드리겠습니다. Day 1: - 아침 식사 후 한라산 등반을 위해 한라산 국립공원으로 이동. -한라산 등반을 즐기며 아름다운 경치와 자연을 감상. - 저녁에는 제주 시내로 이동하여 현지 맛집에서 제주 특산물을 맛보기. Day 2: - 아침에 제주 해양도립공원으로 이동하여 다양한 수상 스포츠 활동을 즐기기 (스노쿨링, 잠수함 투어, 제트 스키 등). - 해양도립공원에서 해변 산책이나 일몰 감상하기. - 저녁에는 제주 시내로 돌아와 맛있는 해산물 요리를 맛보기. Day 3: - 아침에 우도로 이동하여 우도 자전거 여행을 즐기기. - 우도에서 해양 스포츠 활동을 즐기거나 우도 해변에서 휴식하기. - 점심에는 우도의 특산물인 홍어를 맛보기. - 오후에는 성산일출봉으로 이동하여 아름다운 일출을 감상하기. - 성산일출봉 근처에서 저녁 식사 후 호텔로 돌아가 휴식 취하기. Day 4: - 아침에 제주 마라도로 이동하여 수상 스포츠를 즐기기 (패러셀링, 스노클링 등). - 마라도에서 해산물 식사를 즐기며 휴식하기. - 오후에 제주 시내로 돌아와 쇼핑이나 제주 도립 미술관 등 다양한 관광 명소 방문. - 저녁에는 제주의 전통음식을 맛보거나 마지막으로 바다를 바라보며 휴식하기. 이것은 일반적인 여행 계획이며, 여행 일정과 활동은 개인의 선호도에 따라 조정될 수 있습니다. 또한, 제주도의 날씨와 조건에 따라 일정을 조정하는 것이 좋습니다. 즐거운 여행 되세요 :)",
  },
  {
    role: "user",
    content:
      "여행계획을 만들어줘. 기간:3박 4일, 지역:스위스, 희망여행테마:하이킹,자동차유무:아니요. 이 내용을 기반으로 여행계획을 만들어줘",
  },
  {
    role: "system",
    content:
      "스위스에서의 3박 4일 하이킹 여행을 즐기는 계획을 세워보았습니다. Day 1:- 인터라켄에서 식사를 즐깁니다. 현지 음식을 맛보는 것도 좋은 경험이 될 것입니다. - 인터라켄 주변의 하이킹 코스 중 하나인 그린델발트(Greenwald)로 이동합니다. 이곳은 아름다운 풍경과 트레일이 특징이며, 중간에 작은 마을에서 휴식을 취할 수 있습니다. - 인터라켄으로 돌아와 현지 레스토랑에서 저녁을 즐깁니다. 알프스 지역의 맛있는 요리를 맛볼 수 있습니다. Day 2: - 라우터브루넨(Rauberbrunnen)에서 유명한 높이 300m의 폭포를 감상하고, 주변 경로를 따라 하이킹을 즐깁니다. 이곳은 아름다운 자연 경관과 산책로로 유명합니다. - 라인델발트로 돌아와 케이블카를 이용하여 마레겐호른(Männlichen)으로 이동합니다. 이곳은 알프스의 환상적인 전망을 제공하며, 그라인델발트까지의 하이킹 경로도 있습니다. Day 3: - 기차를 이용하여 뤼체른(Lucerne)으로 이동합니다. 뤼체른은 호수와 산 사이에 위치한 아름다운 도시로, 하이킹 코스도 다양합니다. - 피르스트(Pilatus)로 이동하여 케이블카와 구름다리를 경험하고, 하이킹을 즐깁니다. 피르스트에서는 알프스의 아름다운 전망을 감상할 수 있습니다. Day 4: - 뤼체른의 아름다운 도심을 돌아다니며 즐거운 시간을 보낸 후, 기차를 이용하여 주어진 시간에 맞추어 공항으로 이동합니다. 이 계획은 주어진 정보를 기반으로 작성되었습니다. 하지만 실제 여행 전에는 현지의 날씨, 교통 상황 등을 확인하여 일정을 조정하는 것이 좋습니다. 즐거운 여행이 되길 바랍니다!",
  },
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
    .then(function resetCursor() {
      document.body.style.cursor = "default";
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
  chat_content.style.fontFamily = "'IBM Plex Sans KR', sans-serif";
  chat_content.style.fontSize = "16px";
};
