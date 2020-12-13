import jsdom from 'jsdom';
const { JSDOM } = jsdom;




const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
