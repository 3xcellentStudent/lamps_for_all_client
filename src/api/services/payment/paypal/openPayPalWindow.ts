export default function openPayPalWindow(link: string): string{
  const { width, height } = window.screen;
  const { left, top } = { left: width / 2 - 300, top: height / 2 - 250 };

  const openedWindow = window.open(
    link,
    '_blank',
    `width=600,height=500,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,left=${left},top=${top}`
  );

  openedWindow?.parent.postMessage("Hello !", "http://localhost:3000/purchase")
  
  // const checkWindowClosed = setInterval(() => {
  //   openedWindow?.close()
  //   // if (openedWindow?.closed) {
  //   //   console.log("The PayPal window was closed!");

  //   //   // Здесь можно перенаправить или обновить состояние магазина
  //     clearInterval(checkWindowClosed);
  //   // }
  // }, 3000);

  return "";
}

// Заметка: сделать отдельную страницу payment/success на которой будет код для обработки данных
// с вернувшегося url с paypal после оплаты а также подтверждения оплаты, и отдельную страницу
// сайта, на которую будет редиректить после успешной оплаты, или ответ возврата.
