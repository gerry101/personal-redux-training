import {
	applyMiddleware
} from 'redux'

import checker from './checker'
import logger from './logger'

export default applyMiddleware(checker, logger)