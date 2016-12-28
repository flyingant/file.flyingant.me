import {
  SELECT_FILE,
  UPLOAD_FILE,
  UPLOAD_FILE_COMPLETED,
  UPLOAD_FILE_FAILED,
  FILTER_FILES,
  FILTER_FILES_COMPLETED,
  FILTER_FILES_FAILED,
  CREATE_QRCODE,
  CREATE_QRCODE_COMPLETED,
  CLEAR_QRCODE
} from './FileActionTypes';

export function selectFile(payload) {
  return {
    type: SELECT_FILE,
    payload: payload
  };
}

export function uploadFile(payload) {
  return {
    type: UPLOAD_FILE,
    payload: payload
  };
}

export function uploadFileCompleted(args) {
  return {
    type: UPLOAD_FILE_COMPLETED,
    payload: args
  };
}

export function uploadFileFailed(args) {
  return {
    type: UPLOAD_FILE_FAILED,
    payload: args
  }
}

export function filterFiles(payload) {
  return {
    type: FILTER_FILES,
    payload: payload
  };
}

export function filterFilesCompleted(payload) {
  return {
    type: FILTER_FILES_COMPLETED,
    payload: payload
  };
}

export function filterFilesFailed(payload) {
  return {
    type: FILTER_FILES_FAILED,
    payload: payload
  };
}

export function createQRcode(payload) {
  return {
    type: CREATE_QRCODE,
    payload: payload
  };
}

export function createQRCompleted(payload) {
  return {
    type: CREATE_QRCODE_COMPLETED,
    payload: payload
  };
}

export function clearQRCode() {
  return {
    type: CLEAR_QRCODE
  };
}


