import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getTopic } from "../data/topics";
import { getArticle } from "../data/articles";

const AD_CLIENT = "ca-pub-8975638810029685";

// Pages that are private to a user or are only forms/navigation.
// Google should not index them and ads must not load on them.
const PRIVATE_PAGES = [
  "/login",
  "/register",
  "/forgot-password",
  "/profile",
  "/history",
  "/result",
  "/leaderboard",
];

// Ads are allowed only on pages that have real publisher content.
function isContentPage(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const staticPages = [
    "/",
    "/categories",
    "/programming",
    "/ai",
    "/english",
    "/mathematics",
    "/science",
    "/general-knowledge",
    "/learn",
    "/articles",
    "/about",
  ];
  if (staticPages.includes(path)) return true;

  const parts = path.split("/").filter(Boolean);
  if (parts.length === 2) {
    if (parts[0] === "learn" || parts[0] === "quiz") return !!getTopic(parts[1]);
    if (parts[0] === "articles") return !!getArticle(parts[1]);
  }
  return false;
}

function SiteGuard() {
  const { pathname } = useLocation();
  const isPrivate = PRIVATE_PAGES.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
  const adsAllowed = isContentPage(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!adsAllowed) {
      // Ads were loaded on an earlier page. Reload so this page opens clean.
      if (window.__qmAdsLoaded) window.location.reload();
      return;
    }
    if (window.__qmAdsLoaded) return;
    const s = document.createElement("script");
    s.async = true;
    s.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
      AD_CLIENT;
    s.crossOrigin = "anonymous";
    document.head.appendChild(s);
    window.__qmAdsLoaded = true;
  }, [adsAllowed]);

  if (!isPrivate) return null;
  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );
}

export default SiteGuard;
