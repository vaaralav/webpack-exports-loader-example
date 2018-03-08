import Log from 'exports-loader?Log!$legacy/legacy.js';
import { Log as Log2 } from 'exports-loader?Log=Log!$legacy/legacy';

import { LegacyLog } from './legacy/legacy';

Log('Hello world!');

Log2('2nd hello!');

LegacyLog('Logged with Webpack configured thing');
