'use strict';

// CyberPinoy Radio Alexa Skill — direct Lambda response, no external SDK.
const STREAM_URL = 'https://a6.asurahosting.com/listen/cyberpinoy_radio/radio.mp3';
const TOKEN = 'cyberpinoy-radio-live';

exports.handler = async (event) => {
  const request = event.request || {};
  const type = request.type;
  const intent = request.intent && request.intent.name;
  console.log('CyberPinoy request', type, intent || '');

  if (type === 'LaunchRequest' ||
      (type === 'IntentRequest' && ['PlayRadioIntent', 'AMAZON.ResumeIntent'].includes(intent))) {
    return {
      version: '1.0',
      response: {
        directives: [{
          type: 'AudioPlayer.Play',
          playBehavior: 'REPLACE_ALL',
          audioItem: {
            stream: {
              url: STREAM_URL,
              token: TOKEN,
              offsetInMilliseconds: 0
            }
          }
        }],
        shouldEndSession: true
      }
    };
  }

  if (type === 'IntentRequest' &&
      ['AMAZON.StopIntent', 'AMAZON.CancelIntent', 'AMAZON.PauseIntent'].includes(intent)) {
    return {
      version: '1.0',
      response: {
        directives: [{ type: 'AudioPlayer.Stop' }],
        shouldEndSession: true
      }
    };
  }

  if (type === 'AudioPlayer.PlaybackFailed') {
    console.error('Audio playback failed:', JSON.stringify(request.error || {}));
  }

  if (type && type.startsWith('AudioPlayer.')) {
    return { version: '1.0', response: {} };
  }

  return {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: 'Welcome to Cyber Pinoy Radio. Say play to listen live.'
      },
      shouldEndSession: false,
      reprompt: {
        outputSpeech: {
          type: 'PlainText',
          text: 'Say play to listen live.'
        }
      }
    }
  };
};
