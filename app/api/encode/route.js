export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const html = searchParams.get('html');

  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Handle OPTIONS request for CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers });
  }

  // Check if HTML parameter is provided
  if (!html) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Missing HTML parameter. Use ?html=YOUR_HTML_CODE',
        encoded_html: '',
        characters: 0,
        timestamp: new Date().toISOString(),
      }),
      { headers, status: 400 }
    );
  }

  try {
    // Your encryption functions (from original tool)
    const quot = "'";
    
    function EncryptBasic(htmlCode) {
      const NewCode = escape(htmlCode);
      return `<script language=javascript>document.write(unescape(${quot}${NewCode}${quot}))</script>\n`;
    }
    
    function Hex(dec) {
      const hexbase = "0123456789ABCDEF";
      const hx_hi = Math.floor(dec / 16);
      const hx_lo = dec % 16;
      const hx = hexbase.substr(hx_hi, 1) + hexbase.substr(hx_lo, 1);
      return '%' + hx;
    }
    
    function EncryptAll(htmlCode) {
      let NewCode = "";
      for (let i = 0; i < htmlCode.length; i++) {
        NewCode += Hex(htmlCode.charCodeAt(i));
      }
      return `<script language=javascript>document.write(unescape(${quot}${NewCode}${quot}))</script>\n`;
    }

    // Using basic encryption (as requested)
    const encodedHtml = EncryptBasic(decodeURIComponent(html));
    
    const response = {
      status: 'success',
      message: 'HTML encoded successfully',
      encoded_html: encodedHtml,
      characters: encodedHtml.length,
      timestamp: new Date().toISOString(),
      request: {
        html_length: html.length,
        method: 'GET',
        encoding_type: 'basic'
      }
    };

    return new Response(JSON.stringify(response, null, 2), { headers });

  } catch (error) {
    console.error('Encoding error:', error);
    
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Failed to encode HTML',
        encoded_html: '',
        characters: 0,
        timestamp: new Date().toISOString(),
        error: error.message,
      }),
      { headers, status: 500 }
    );
  }
}
