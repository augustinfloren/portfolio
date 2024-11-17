window.addEventListener("DOMContentLoaded", () => {
    // Vérifie si l'URL contient des paramètres UTM
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    const utmContent = urlParams.get('utm_content');

    // Vérifie si la redirection va vers la page d'accueil
    const redirectUrl = "https://augustinfloren.com";

    // Si des paramètres UTM sont présents, les ajouter à l'URL de redirection
    let newRedirectUrl = redirectUrl;
    if (utmSource || utmMedium || utmCampaign || utmContent) {
    newRedirectUrl += `?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_content=${utmContent}`;
    }

    // Redirige vers l'URL avec les paramètres UTM
    setTimeout(() => {
    window.location.href = newRedirectUrl;
    }, 2000);  // délai de 2 secondes
});