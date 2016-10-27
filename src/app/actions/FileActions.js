
import {
  UPLOAD_FILE,
  UPLOAD_FILE_COMPLETED,
  UPLOAD_FILE_FAILED,
  FILTER_FILES,
  FILTER_FILES_COMPLETED,
  FILTER_FILES_FAILED
} from './FileActionTypes';

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