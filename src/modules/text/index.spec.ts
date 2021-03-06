import { parseUnitProp as _parse} from '../../basic';
import { theme as colorTheme } from '../color';
import {rule} from './index'
import {theme} from '../index'
const parse = _parse(rule,{...theme,...colorTheme});

describe('text', () => {
    it('parse text', () => {
        expect(parse({
            mkFontWeight: 'light',
        })).toEqual({
            fontWeight: 300
        });
        expect(parse({
            mkFontFamily: 'serif',
        })).toEqual({
            fontFamily: 'Georgia, Cambria, Times New Roman, Times, serif',
        });
        expect(parse({
            mkFontSize: 'h3',
        })).toEqual({
            fontSize: '48px',
        });
        expect(parse({
            mkTextNoWrap: true,
        })).toEqual({
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        });

        expect(parse({
            mkTextNoWrap: false,
        })).toEqual({
          
        });

        expect(parse({
            mkTextParagraph: true,
        })).toEqual({
            marginBottom: '0.35em',
        });
        expect(parse({
            mkTextParagraph: false,
        })).toEqual({
        });
        expect(parse({
            mkTextAlign: 'center',
        })).toEqual({
            textAlign: 'center',
        });
        expect(parse({
            mkTextTransform: 'capitalize',
        })).toEqual({
            textTransform: 'capitalize',
        });
        expect(parse({
            mkTextDirection: 'ltr',
        })).toEqual({
            direction: 'ltr',
        });
        expect(parse({
            mkTextDecoration: 'overline',
        })).toEqual({
            textDecoration: 'overline',
        });
        expect(parse({
            mkTextUnderlined: true,
        })).toEqual({
            borderBottomStyle: 'dotted',
            borderBottomWidth: '1px',
            borderBottomColor: '#e0e0e0',
        });
        expect(parse({
            mkTextUnderlined: false,
        })).toEqual({
        });
        expect(parse({
            mkTextSemantic: 'em',
        })).toEqual({
            fontStyle: 'italic',
        });
        expect(parse({
            mkTextSemantic: 'strong',
        })).toEqual({
            fontWeight:700,
        });        
    })

});

