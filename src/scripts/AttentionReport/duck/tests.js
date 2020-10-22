import expect from 'expect.js';
import reducer from './reducers';
import actions from './actions';
import {getAttentionReportData} from './operations';

describe( 'duck reducer', function( ) {
  describe( 'quack', function( ) {
    const quack = actions.quack( );
    const initialState = false;

    const result = reducer( initialState, quack );

    it( 'should quack', function( ) {
      expect( result ).to.be( true ) ;
    } );
  } );
} );
