import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    BACKGROUND: string; // EAEAEA
    TEXT: {
      BLACK: string;
      GRAY: string;
      WHITE: string;
    };

    PRIMARY: string; // 71BC5C

    BUTTON: {
      GREEN: string;
      GRAY: string;
    };

    MODAL_BACKGROUND: string;
  }
}
