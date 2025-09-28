import {verifierLettre} from '../index';

describe('Vérifier la casse d\'une lette', () => {
    test('Tester que ce n\'est pas un caractère', () => {
        expect(verifierLettre('AA')).toEqual('invalide');
    });

    test('Tester une lettre majuscule', () => {
        expect(verifierLettre('A')).toEqual('majuscule');
    });

    test('Tester une lettre minuscule', () => {
        expect(verifierLettre('a')).toEqual('minuscule');
    });
});
