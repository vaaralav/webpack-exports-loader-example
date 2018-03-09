import Log from 'exports-loader?Log!$legacy/legacy.js';
import { Log as Log2, getMin } from 'exports-loader?Log=Log,getMin=getMin!$legacy/legacy';

import { LegacyLog } from './legacy/legacy';

Log('Hello world!');

Log2('2nd hello!');

LegacyLog('Logged with Webpack configured thing');


console.log(getMin([100,-100,0]));
