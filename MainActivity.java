import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Obter o WebView
        WebView webView = findViewById(R.id.webView);

        // Habilitar JavaScript (opcional, dependendo do seu site)
        webView.getSettings().setJavaScriptEnabled(true);

        // Definir o WebViewClient para abrir o site dentro do app
        webView.setWebViewClient(new WebViewClient());

        // Carregar o seu site
        webView.loadUrl("http://www.seusite.com");
    }

    @Override
    public void onBackPressed() {
        WebView webView = findViewById(R.id.webView);
        // Se o WebView puder voltar, ele volta à página anterior
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
