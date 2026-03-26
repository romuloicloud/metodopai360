import urllib.request
import os

logos = {
    "pmerj": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Bras%C3%A3o_da_Pol%C3%ADcia_Militar_do_Estado_do_Rio_de_Janeiro.svg/300px-Bras%C3%A3o_da_Pol%C3%ADcia_Militar_do_Estado_do_Rio_de_Janeiro.svg.png",
    "pf": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Bras%C3%A3o_da_Pol%C3%ADcia_Federal_do_Brasil.svg/300px-Bras%C3%A3o_da_Pol%C3%ADcia_Federal_do_Brasil.svg.png",
    "prf": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Bras%C3%A3o_Pol%C3%ADcia_Rodovi%C3%A1ria_Federal.svg/300px-Bras%C3%A3o_Pol%C3%ADcia_Rodovi%C3%A1ria_Federal.svg.png",
    "pcerj": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bras%C3%A3o_Policia_Civil_RJ.png/300px-Bras%C3%A3o_Policia_Civil_RJ.png",
    "gm": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bras%C3%A3o_da_Guarda_Municipal_do_Rio_de_Janeiro.svg/300px-Bras%C3%A3o_da_Guarda_Municipal_do_Rio_de_Janeiro.svg.png",
    "tse": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Tribunal_Superior_Eleitoral_%28logo%29.svg/300px-Tribunal_Superior_Eleitoral_%28logo%29.svg.png",
    "tj": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Justitia_Blindfolded.svg/300px-Justitia_Blindfolded.svg.png",
    "caixa": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Caixa_Econ%C3%B4mica_Federal_logo.svg/300px-Caixa_Econ%C3%B4mica_Federal_logo.svg.png",
    "correios": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Correios_%282014%29_logo.svg/300px-Correios_%282014%29_logo.svg.png",
    "petrobras": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Petrobras_Logo.png/300px-Petrobras_Logo.png",
    "bb": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Banco_do_Brasil_logo.svg/300px-Banco_do_Brasil_logo.svg.png",
    "eb": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/S%C3%ADmbolo_do_Ex%C3%A9rcito_Brasileiro.svg/300px-S%C3%ADmbolo_do_Ex%C3%A9rcito_Brasileiro.svg.png",
    "espcex": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Bras%C3%A3o_EsPCEx.png/300px-Bras%C3%A3o_EsPCEx.png",
    "ime": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bras%C3%A3o_do_IME.png/300px-Bras%C3%A3o_do_IME.png",
    "fab": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Emblem_of_the_Brazilian_Air_Force.svg/300px-Emblem_of_the_Brazilian_Air_Force.svg.png",
    "afa": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Academia_da_For%C3%A7a_A%C3%A9rea_%28AFA%29_-_Bras%C3%A3o.png/300px-Academia_da_For%C3%A7a_A%C3%A9rea_%28AFA%29_-_Bras%C3%A3o.png",
    "ita": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Instituto_Tecnol%C3%B3gico_de_Aeron%C3%A1utica_%28ITA%29_-_Bras%C3%A3o.png/300px-Instituto_Tecnol%C3%B3gico_de_Aeron%C3%A1utica_%28ITA%29_-_Bras%C3%A3o.png",
    "mb": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Logotipo_da_Marinha_do_Brasil.svg/300px-Logotipo_da_Marinha_do_Brasil.svg.png",
    "fuzileiro": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Emblema_do_Corpo_de_Fuzileiros_Navais_%28Brasil%29.svg/300px-Emblema_do_Corpo_de_Fuzileiros_Navais_%28Brasil%29.svg.png",
    "enem": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Logotipo_do_Enem.svg/300px-Logotipo_do_Enem.svg.png",
    "pedroii": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Logo_do_Col%C3%A9gio_Pedro_II_%28Rio_de_Janeiro%29.svg/300px-Logo_do_Col%C3%A9gio_Pedro_II_%28Rio_de_Janeiro%29.svg.png",
    "faetec": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Logomarca_Faetec.png/300px-Logomarca_Faetec.png"
}

out_dir = r"C:\opensquad\squad_da_vitoria\app\assets\logos"
os.makedirs(out_dir, exist_ok=True)

for key, url in logos.items():
    req = urllib.request.Request(
        url, 
        data=None, 
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
    )
    try:
        with urllib.request.urlopen(req) as response:
            with open(os.path.join(out_dir, f"{key}.png"), 'wb') as f:
                f.write(response.read())
        print(f"Success: {key}")
    except Exception as e:
        print(f"Failed: {key} - {e}")
