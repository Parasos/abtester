import os

from PIL import Image
import streamlit as st
from streamlit_navigation_bar import st_navbar

import pages as pg
from source.utils import stylized_container


# Set browser tab title, favicon and menu options
st.set_page_config(
    page_title="abtester",
    page_icon=Image.open("images/icon.png"),
    initial_sidebar_state="collapsed",
)

pages = ["Size", "Significance", "GitHub"]
parent_dir = os.path.dirname(os.path.abspath(__file__))
logo_path = os.path.join(parent_dir, "images/icon_white.svg")
urls = {
    "GitHub": "https://github.com/gabrieltempass/ab-tester"
}
styles = {
    "nav": {"background-color": "rgb(66, 135, 245)"},
    "div": {"max-width": "31.25rem"},
    "span": {"color": "white"},
}
options = {
    "show_menu": False,
    "show_sidebar": False,
}

page = st_navbar(
    pages,
    selected="Size",
    logo_path=logo_path,
    logo_page="Size",
    urls=urls,
    styles=styles,
    options=options,
)

# Prevent layout shift caused by scrollbars
# https://github.com/streamlit/streamlit/issues/8504

html = (
    """
    <style>
        div[data-testid="stThumbValue"], div[data-testid="stTickBarMin"], div[data-testid="stTickBarMax"] {
            font-family: "Source Sans Pro", sans-serif;
            font-size: 16px;
        }
        div[data-testid="stToolbar"] {
            visibility: hidden;
        }
        section.main {
            overflow-y: scroll;
        }
        footer {
            visibility: hidden;
        }
        a[class^="viewerBadge_container"] {
            visibility: hidden;
        }
    </style>
    """
)

with stylized_container("adjust"):
    st.markdown(html, unsafe_allow_html=True)

functions = {
    "Home": pg.show_home,
    "Size": pg.show_size,
    "Significance": pg.show_significance,
}
go_to = functions.get(page)
if go_to:
    go_to()
