// 仅用于接口调试 / Mock 测试
const mockBody = {
  data: {
    balance: 0,
    bizId: "1598",
    bizType: 8,
    buySuccess: true
  },
  success: true
};

$done({
  status: 200,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  body: JSON.stringify(mockBody)
});
