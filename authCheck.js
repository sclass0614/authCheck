import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabase = createClient("https://dfomeijvzayyszisqflo.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmb21laWp2emF5eXN6aXNxZmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NjYwNDIsImV4cCI6MjA2MDQ0MjA0Mn0.-r1iL04wvPNdBeIvgxqXLF2rWqIUX5Ot-qGQRdYo_qk");

const { data } = await supabase.auth.getSession();  // 로그인 세션 확인
const params = new URLSearchParams(window.location.search);  // URL 쿼리 분석

if (!data.session || params.get("from") !== "index") {
  alert("정상적인 경로가 아닙니다. 대시보드를 통해 접속해주세요.");
  location.href = "https://your-dashboard.github.io/";  // 대시보드로 리디렉션
}
