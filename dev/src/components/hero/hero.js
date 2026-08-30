/* ============================================================
   حركة الظهور التدريجي لمستطيلات الإحصائيات (تظهر مع تحميل الصفحة)
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  var stats = document.querySelectorAll('#hero-stats .hero__stat');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // لو المستخدم مفعّل "تقليل الحركة" في نظامه، اظهر كل حاجة فورًا بدون تأخير
  if (prefersReducedMotion) {
    stats.forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var BASE_DELAY = 420;   // الفارق الزمني بين ظهور مستطيل والتالي (ms) — أبطأ = إحساس سينمائي أوضح
  var START_DELAY = 350;  // تأخير بسيط بعد تحميل الصفحة قبل بدء أول مستطيل (ms)

  stats.forEach(function (el) {
    var order = parseInt(el.dataset.delay || 0, 10);
    setTimeout(function () {
      el.classList.add('is-visible');
    }, START_DELAY + order * BASE_DELAY);
  });
});