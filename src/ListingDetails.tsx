import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './App';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('screen').width;

type ListingDetailsProps = StackScreenProps<
  RootStackParamList,
  'ListingDetails'
>;
const ListingDetails = ({navigation}: ListingDetailsProps) => {
  const chevronLeft = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3484 6.2762C15.6929 6.6345 15.6817 7.20424 15.3234 7.54875L10.5981 12L15.3234 16.4513C15.6817 16.7958 15.6929 17.3655 15.3484 17.7238C15.0038 18.0821 14.4341 18.0933 14.0758 17.7488L8.67581 12.6488C8.49934 12.4791 8.39961 12.2448 8.39961 12C8.39961 11.7552 8.49934 11.5209 8.67581 11.3513L14.0758 6.25125C14.4341 5.90674 15.0038 5.91791 15.3484 6.2762Z" fill="#021217"/>
  </svg>`;

  const chevronRight = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <circle cx="11" cy="11" r="10.5" stroke="#263237" stroke-opacity="0.1"/>
  <path d="M9.49219 7.46484L13.0277 11.0004L9.49219 14.5359" stroke="#263237" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const pencilIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M12.2264 3.22716C12.9294 2.52422 14.0691 2.52422 14.772 3.22716C15.475 3.9301 15.475 5.0698 14.772 5.77274L14.0584 6.48635L11.5128 3.94076L12.2264 3.22716Z" fill="#111827"/>
  <path d="M10.24 5.21356L2.69922 12.7544V15.3H5.2448L12.7856 7.75914L10.24 5.21356Z" fill="#111827"/>
  </svg>`;

  const trashIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.09922 1.80005C7.75832 1.80005 7.44669 1.99265 7.29424 2.29756L6.64299 3.60005H3.59922C3.10216 3.60005 2.69922 4.00299 2.69922 4.50005C2.69922 4.9971 3.10216 5.40005 3.59922 5.40005L3.59922 14.4C3.59922 15.3942 4.40511 16.2 5.39922 16.2H12.5992C13.5933 16.2 14.3992 15.3942 14.3992 14.4V5.40005C14.8963 5.40005 15.2992 4.9971 15.2992 4.50005C15.2992 4.00299 14.8963 3.60005 14.3992 3.60005H11.3555L10.7042 2.29756C10.5518 1.99265 10.2401 1.80005 9.89922 1.80005H8.09922ZM6.29922 7.20005C6.29922 6.70299 6.70216 6.30005 7.19922 6.30005C7.69628 6.30005 8.09922 6.70299 8.09922 7.20005V12.6C8.09922 13.0971 7.69628 13.5 7.19922 13.5C6.70216 13.5 6.29922 13.0971 6.29922 12.6V7.20005ZM10.7992 6.30005C10.3022 6.30005 9.89922 6.70299 9.89922 7.20005V12.6C9.89922 13.0971 10.3022 13.5 10.7992 13.5C11.2963 13.5 11.6992 13.0971 11.6992 12.6V7.20005C11.6992 6.70299 11.2963 6.30005 10.7992 6.30005Z" fill="#111827"/>
  </svg>`;

  const verfied = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
  <path d="M14.375 8.00001L12.85 6.25626L13.0625 3.95001L10.8063 3.4375L9.62502 1.4375L7.50001 2.35L5.37501 1.4375L4.19376 3.43125L1.9375 3.93751L2.15 6.25001L0.625 8.00001L2.15 9.74377L1.9375 12.0563L4.19376 12.5688L5.37501 14.5625L7.50001 13.6438L9.62502 14.5563L10.8063 12.5625L13.0625 12.05L12.85 9.74377L14.375 8.00001ZM6.30626 10.95L3.93126 8.56876L4.85626 7.64376L6.30626 9.10002L9.96252 5.43126L10.8875 6.35626L6.30626 10.95Z" fill="white"/>
  </svg>`;

  const union = `<svg xmlns="http://www.w3.org/2000/svg" width="58" height="11" viewBox="0 0 58 11" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.71396 1.47526C9.71396 2.16552 9.18886 2.70089 8.51183 2.70089C7.83481 2.70089 7.31039 2.16552 7.30972 1.47526C7.30972 0.784996 7.83481 0.249634 8.51183 0.249634C9.18886 0.249634 9.71396 0.784996 9.71396 1.47526ZM9.80991 7.48925H7.2131L7.76551 3.1092C8.17999 3.23625 8.84302 3.23625 9.2575 3.1092L9.80991 7.48925ZM0.5 6.64525C0.98378 7.0957 2.08861 7.63105 3.6499 7.63105C5.40376 7.63105 6.46795 6.70097 6.46795 5.25046C6.46795 4.23613 5.85955 3.54654 4.6028 3.2646L3.37336 2.98265C2.90357 2.87055 2.65502 2.71497 2.65502 2.4337C2.65502 2.15243 2.88957 1.969 3.41467 1.969C4.05038 1.969 4.71341 2.2788 5.1692 2.70138L6.20539 1.15237C5.70762 0.701248 4.68543 0.3072 3.41467 0.3072C1.77075 0.3072 0.665925 1.1381 0.665925 2.54648C0.665925 3.5744 1.23233 4.32106 2.43445 4.60369L3.66389 4.89922C4.27161 5.03985 4.46486 5.22329 4.46486 5.46244C4.46486 5.77224 4.2163 5.9414 3.6499 5.9414C2.98686 5.9414 2.18523 5.65946 1.53619 5.09624L0.5 6.64525ZM13.0989 7.48975H11.0272V0.447834H12.6158C12.9203 0.447834 13.0995 0.631271 13.0995 0.941074V1.39151C13.5967 0.673393 14.2877 0.3072 15.1993 0.3072C16.788 0.3072 17.7135 1.27873 17.7135 3.16608V7.49042H15.6411V3.70145C15.6411 2.67353 15.2127 2.19456 14.3977 2.19456C13.5408 2.19456 13.0989 2.77204 13.0989 3.70145V7.48975ZM26.1123 6.54607V0.447834H24.5237C24.2198 0.447834 24.04 0.631271 24.04 0.941074V1.36366C23.5702 0.645537 22.8244 0.3072 21.9403 0.3072C20.269 0.3072 18.8183 1.79983 18.8183 3.79996C18.8183 5.80009 20.269 7.29272 21.9403 7.29272C22.8244 7.29272 23.5428 7.01145 24.04 6.37757V6.82802C24.04 7.78528 23.4182 8.47555 22.3547 8.47555C21.4018 8.47555 20.6695 8.06655 20.2136 7.61612L19.1361 9.25005C19.8265 9.88393 20.9733 10.2501 22.3547 10.2501C24.4271 10.2501 26.1123 9.19366 26.1123 6.54607ZM22.4933 2.16602C23.4323 2.16602 24.1092 2.88481 24.1092 3.79996C24.1092 4.71511 23.4323 5.4339 22.4933 5.4339C21.623 5.4339 20.9187 4.71511 20.9187 3.79996C20.9187 2.88413 21.623 2.16602 22.4933 2.16602ZM31.9277 7.63105C33.7235 7.63105 35.1742 6.13843 35.1742 3.96913C35.1742 1.79983 33.7242 0.3072 31.9283 0.3072C30.9888 0.3072 30.2151 0.645537 29.704 1.36366V0.941074C29.704 0.631271 29.5241 0.447834 29.2203 0.447834H27.6309V10.0823H29.7034V6.71592C30.2424 7.3491 30.9881 7.63105 31.9277 7.63105ZM31.3753 2.16602C32.3421 2.16602 33.0745 2.91268 33.0745 3.96913C33.0745 5.02491 32.3428 5.77156 31.3753 5.77224C30.3944 5.77224 29.6347 5.02559 29.6347 3.96913C29.6347 2.91268 30.3944 2.16602 31.3753 2.16602ZM43.601 7.48975V0.447834H42.0124C41.7085 0.447834 41.5286 0.631271 41.5286 0.941074V1.36366C41.0175 0.645537 40.2439 0.3072 39.3043 0.3072C37.5084 0.3072 36.0578 1.79983 36.0578 3.96913C36.0578 6.13843 37.5084 7.63105 39.3043 7.63105C40.2439 7.63105 41.0175 7.29272 41.5286 6.5746V7.48975H43.601ZM39.8574 2.16602C40.8383 2.16602 41.598 2.91268 41.598 3.96913C41.598 5.02491 40.8383 5.77156 39.8574 5.77224C38.8904 5.77224 38.1581 5.02559 38.1581 3.96913C38.1581 2.91268 38.8904 2.16602 39.8574 2.16602ZM50.6191 5.25114C50.6191 6.70165 49.5557 7.63105 47.801 7.63105C46.2398 7.63105 45.1349 7.0957 44.6512 6.64525L45.6874 5.09624C46.337 5.65946 47.138 5.9414 47.801 5.9414C48.3675 5.9414 48.6161 5.77224 48.6161 5.46244C48.6161 5.22329 48.4228 5.03985 47.8151 4.89922L46.5856 4.60369C45.3835 4.32174 44.8171 3.57508 44.8171 2.54716C44.8171 1.13878 45.922 0.307879 47.5659 0.307879C48.8373 0.307879 49.8595 0.702606 50.3566 1.15304L49.3204 2.70206C48.8646 2.27948 48.2016 1.96968 47.5659 1.96968C47.0408 1.96968 46.8062 2.15311 46.8062 2.43438C46.8062 2.71565 47.0548 2.87055 47.5245 2.98333L48.754 3.26528C50.0114 3.54722 50.6191 4.23681 50.6191 5.25114ZM57.1668 5.25114C57.1668 6.70165 56.1033 7.63105 54.3487 7.63105C52.7881 7.63105 51.6826 7.0957 51.1989 6.64525L52.2351 5.09624C52.8847 5.65946 53.6857 5.9414 54.3487 5.9414C54.9152 5.9414 55.1637 5.77224 55.1637 5.46244C55.1637 5.22329 54.9705 5.03985 54.3628 4.89922L53.1333 4.60369C51.9312 4.32174 51.3648 3.57508 51.3648 2.54716C51.3648 1.13878 52.4696 0.307879 54.1136 0.307879C55.385 0.307879 56.4071 0.702606 56.9043 1.15304L55.8681 2.70206C55.4123 2.27948 54.7493 1.96968 54.1136 1.96968C53.5885 1.96968 53.3539 2.15311 53.3539 2.43438C53.3539 2.71565 53.6025 2.87055 54.0722 2.98333L55.3017 3.26528C56.5591 3.54722 57.1668 4.23681 57.1668 5.25114Z" fill="white"/>
  </svg>`;

  const locationIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75245 15.1465L7.7547 15.1475C7.91239 15.2161 8.00039 15.2001 8.00039 15.2001C8.00039 15.2001 8.08839 15.2161 8.24672 15.1472L8.24833 15.1465L8.25291 15.1444L8.26744 15.1377C8.27946 15.1321 8.29612 15.1243 8.31712 15.1142C8.35909 15.0939 8.41843 15.0645 8.49265 15.0258C8.64101 14.9485 8.84936 14.8336 9.09772 14.6797C9.59338 14.3725 10.2543 13.9062 10.9168 13.2676C12.2421 11.9902 13.6004 9.99408 13.6004 7.2001C13.6004 4.1073 11.0932 1.6001 8.00039 1.6001C4.9076 1.6001 2.40039 4.1073 2.40039 7.2001C2.40039 9.99408 3.75866 11.9902 5.08401 13.2676C5.7465 13.9062 6.40741 14.3725 6.90306 14.6797C7.15142 14.8336 7.35977 14.9485 7.50813 15.0258C7.58235 15.0645 7.64169 15.0939 7.68367 15.1142C7.70466 15.1243 7.72132 15.1321 7.73335 15.1377L7.74787 15.1444L7.75245 15.1465ZM8.00039 9.0001C8.9945 9.0001 9.80039 8.19421 9.80039 7.2001C9.80039 6.20599 8.9945 5.4001 8.00039 5.4001C7.00628 5.4001 6.20039 6.20599 6.20039 7.2001C6.20039 8.19421 7.00628 9.0001 8.00039 9.0001Z" fill="#263237" fill-opacity="0.3"/>
  </svg>`;

  const bedIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14.0007 7.18659V5.33325C14.0007 4.23325 13.1007 3.33325 12.0007 3.33325H9.33398C8.82065 3.33325 8.35398 3.53325 8.00065 3.85325C7.64732 3.53325 7.18065 3.33325 6.66732 3.33325H4.00065C2.90065 3.33325 2.00065 4.23325 2.00065 5.33325V7.18659C1.59398 7.55325 1.33398 8.07992 1.33398 8.66659V12.6666H2.66732V11.3333H13.334V12.6666H14.6673V8.66659C14.6673 8.07992 14.4073 7.55325 14.0007 7.18659ZM9.33398 4.66659H12.0007C12.3673 4.66659 12.6673 4.96659 12.6673 5.33325V6.66659H8.66732V5.33325C8.66732 4.96659 8.96732 4.66659 9.33398 4.66659ZM3.33398 5.33325C3.33398 4.96659 3.63398 4.66659 4.00065 4.66659H6.66732C7.03398 4.66659 7.33398 4.96659 7.33398 5.33325V6.66659H3.33398V5.33325ZM2.66732 9.99992V8.66659C2.66732 8.29992 2.96732 7.99992 3.33398 7.99992H12.6673C13.034 7.99992 13.334 8.29992 13.334 8.66659V9.99992H2.66732Z" fill="#263237" fill-opacity="0.4"/>
  </svg>`;

  const bathroomIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.08268 5.25008C4.72701 5.25008 5.24935 4.72775 5.24935 4.08341C5.24935 3.43908 4.72701 2.91675 4.08268 2.91675C3.43835 2.91675 2.91602 3.43908 2.91602 4.08341C2.91602 4.72775 3.43835 5.25008 4.08268 5.25008Z" fill="#263237" fill-opacity="0.4"/>
  <path d="M11.666 7.58341V2.81758C11.666 1.90758 10.9252 1.16675 10.0152 1.16675C9.57768 1.16675 9.15768 1.34175 8.84852 1.65091L8.11935 2.38008C8.02602 2.35091 7.92685 2.33341 7.82185 2.33341C7.58852 2.33341 7.37268 2.40341 7.19185 2.52008L8.80185 4.13008C8.91852 3.94925 8.98852 3.73341 8.98852 3.50008C8.98852 3.39508 8.97102 3.30175 8.94768 3.20258L9.67685 2.47341C9.76435 2.38591 9.88685 2.33341 10.0152 2.33341C10.2835 2.33341 10.4993 2.54925 10.4993 2.81758V7.58341H6.50352C6.32852 7.46091 6.17102 7.32091 6.02518 7.16341L5.20852 6.25925C5.09768 6.13675 4.95768 6.03758 4.80602 5.96758C4.62518 5.88008 4.42685 5.83341 4.22268 5.83341C3.49935 5.83925 2.91602 6.42258 2.91602 7.14591V7.58341H1.16602V11.0834C1.16602 11.7251 1.69102 12.2501 2.33268 12.2501C2.33268 12.5709 2.59518 12.8334 2.91602 12.8334H11.0827C11.4035 12.8334 11.666 12.5709 11.666 12.2501C12.3077 12.2501 12.8327 11.7251 12.8327 11.0834V7.58341H11.666ZM11.666 11.0834H2.33268V8.75008H11.666V11.0834Z" fill="#263237" fill-opacity="0.4"/>
  </svg>`;

  const frameIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <g clip-path="url(#clip0_5460_133921)">
    <path d="M6.46971 0.892068C6.63498 0.816721 6.81727 0.777832 6.99957 0.777832C7.18186 0.777832 7.36415 0.816721 7.52943 0.892068L12.8135 3.26186C13.0614 3.37367 13.2218 3.61915 13.2218 3.89137C13.2218 4.1636 13.0614 4.40908 12.8135 4.52089L7.52943 6.88582C7.36172 6.96117 7.18186 7.00005 6.99957 7.00005C6.81727 7.00005 6.63498 6.96117 6.46971 6.88582L1.18568 4.51846C0.93776 4.40665 0.777344 4.16117 0.777344 3.88894C0.777344 3.61672 0.93776 3.37123 1.18568 3.25943L6.46971 0.892068ZM6.99957 1.55561C6.92665 1.55561 6.85373 1.57019 6.78568 1.60179L1.68394 3.88894L6.78811 6.1761C6.85616 6.20526 6.92665 6.22228 7.002 6.22228C7.07734 6.22228 7.14783 6.20769 7.21589 6.1761L12.3201 3.88894L7.21589 1.60179C7.1454 1.57019 7.07248 1.55561 6.99957 1.55561ZM1.18568 9.48165L2.3013 8.98096L3.25165 9.4063L1.68394 10.1112L6.78811 12.3983C6.85616 12.4275 6.92665 12.4445 7.002 12.4445C7.07734 12.4445 7.14783 12.4299 7.21589 12.3983L12.3201 10.1112L10.7523 9.40874L11.7027 8.98339L12.8183 9.48408C13.0662 9.59589 13.2267 9.84137 13.2267 10.1136C13.2267 10.3858 13.0662 10.6313 12.8183 10.7431L7.52943 13.108C7.36172 13.1834 7.18186 13.2223 6.99957 13.2223C6.81727 13.2223 6.63498 13.1834 6.46971 13.108L1.18568 10.7407C0.93776 10.6289 0.777344 10.3834 0.777344 10.1112C0.777344 9.83894 0.93776 9.59346 1.18568 9.48165ZM2.3013 5.86985L3.25165 6.29519L1.68394 7.00005L6.78811 9.28721C6.85616 9.31637 6.92665 9.33339 7.002 9.33339C7.07734 9.33339 7.14783 9.3188 7.21589 9.28721L12.3201 7.00005L10.7523 6.29762L11.7027 5.87228L12.8183 6.37297C13.0662 6.48478 13.2267 6.73026 13.2267 7.00249C13.2267 7.27471 13.0662 7.52019 12.8183 7.632L7.52943 9.99693C7.36172 10.0723 7.18186 10.1112 6.99957 10.1112C6.81727 10.1112 6.63498 10.0723 6.46971 9.99693L1.18568 7.62957C0.93776 7.51776 0.777344 7.27228 0.777344 7.00005C0.777344 6.72783 0.93776 6.48235 1.18568 6.37054L2.3013 5.86985Z" fill="#263237" fill-opacity="0.4"/>
  </g>
  <defs>
    <clipPath id="clip0_5460_133921">
      <rect width="14" height="12.4444" fill="white" transform="translate(0 0.777832)"/>
    </clipPath>
  </defs>
  </svg>`;

  const whatsAppIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M0.80639 24.75C0.725432 24.75 0.646928 24.7182 0.588663 24.6596C0.511998 24.5821 0.481946 24.4691 0.510772 24.3647L2.12931 18.4806C1.12593 16.706 0.596636 14.6909 0.597862 12.6453C0.600316 6.08578 5.96131 0.75 12.5489 0.75C15.7443 0.751221 18.7465 1.99021 21.0029 4.23859C23.2593 6.48758 24.5012 9.47605 24.5 12.6538C24.4975 19.2127 19.1359 24.5491 12.5489 24.5491C10.5931 24.5485 8.65806 24.0679 6.94077 23.1587L0.884281 24.7396C0.858521 24.7469 0.832762 24.75 0.80639 24.75Z" fill="white"/>
  <path d="M0.804688 24.4441L2.45696 18.4384C1.43763 16.681 0.901591 14.6866 0.902205 12.644C0.905271 6.25368 6.12827 1.05469 12.5472 1.05469C15.6623 1.05591 18.5853 2.26315 20.7841 4.45351C22.9822 6.64449 24.1929 9.55603 24.1916 12.6532C24.1892 19.0436 18.965 24.2432 12.5472 24.2432C12.5466 24.2432 12.5472 24.2432 12.5472 24.2432H12.5423C10.5938 24.2425 8.67843 23.7559 6.97771 22.832L0.804688 24.4441Z" fill="white"/>
  <path d="M19.3963 5.83703C17.5686 4.0161 15.1392 3.01282 12.5535 3.01221C7.21521 3.01221 2.87355 7.3331 2.87109 12.6444C2.87048 14.4648 3.38199 16.2368 4.35103 17.7714L4.58163 18.1359L3.60339 21.6905L7.26673 20.7342L7.62061 20.943C9.10606 21.8211 10.8099 22.2852 12.5468 22.2858H12.5504C17.8851 22.2858 22.2267 17.9643 22.2286 12.6524C22.2292 10.0785 21.224 7.65796 19.3963 5.83703Z" fill="#40C351"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6399 7.80042C9.42217 7.31802 9.19279 7.30825 8.98488 7.2997C8.81499 7.29237 8.62118 7.29298 8.42737 7.29298C8.23357 7.29298 7.91832 7.36565 7.65153 7.6557C7.38474 7.94576 6.63281 8.64616 6.63281 10.0714C6.63281 11.4966 7.67545 12.8742 7.8208 13.0672C7.96616 13.2602 9.83371 16.2786 12.7911 17.44C15.2487 18.4048 15.7491 18.2131 16.2827 18.1648C16.8163 18.1166 18.0043 17.4644 18.2465 16.7878C18.4888 16.1112 18.4888 15.5317 18.4164 15.4108C18.3435 15.2899 18.1496 15.2179 17.8589 15.0725C17.5682 14.9272 16.1374 14.2268 15.8706 14.1303C15.6038 14.0338 15.41 13.9856 15.2155 14.2757C15.0217 14.5651 14.4642 15.2179 14.2943 15.4108C14.1245 15.6044 13.9546 15.6288 13.6639 15.4835C13.3731 15.3382 12.436 15.0329 11.3241 14.0461C10.4593 13.2785 9.87541 12.3302 9.70552 12.0401C9.53563 11.7507 9.68712 11.5937 9.83309 11.449C9.96373 11.3189 10.1238 11.1107 10.2698 10.9416C10.4151 10.7724 10.4636 10.6515 10.5605 10.4585C10.6574 10.265 10.6089 10.0958 10.536 9.9511C10.4642 9.80577 9.89872 8.37321 9.6399 7.80042Z" fill="white"/>
  </svg>`;

  const circleIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <circle cx="14" cy="14" r="14" fill="#E86225"/>
  </svg>`;

  const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M4.80078 7.02114L3.09021 5.31057C2.70945 4.92981 2.09211 4.92981 1.71135 5.31057C1.33059 5.69133 1.33059 6.30867 1.71135 6.68943L4.11135 9.08943C4.49211 9.47019 5.10945 9.47019 5.49021 9.08943L10.2902 4.28943C10.671 3.90867 10.671 3.29133 10.2902 2.91057C9.90945 2.52981 9.29211 2.52981 8.91135 2.91057L4.80078 7.02114Z" fill="white" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  const circleHollow = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <circle cx="14" cy="14" r="12.5" transform="rotate(90 14 14)" fill="white" stroke="url(#paint0_linear_5460_133947)" stroke-width="3"/>
  <defs>
    <linearGradient id="paint0_linear_5460_133947" x1="-1.14685e-07" y1="29.5312" x2="29.3671" y2="28.1026" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E86225"/>
      <stop offset="1" stop-color="#F2A22B"/>
    </linearGradient>
  </defs>
</svg>`;

  const rectangle = `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="100" viewBox="0 0 6 100" fill="none">
  <path d="M6 0L6 97C6 98.6569 4.65685 100 3 100C1.34314 100 8.58658e-08 98.6569 1.48488e-07 97L3.8147e-06 -3.03316e-07L6 0Z" fill="url(#paint0_linear_5460_133933)"/>
  <defs>
    <linearGradient id="paint0_linear_5460_133933" x1="-0.32812" y1="-7.29494e-07" x2="51.1016" y2="63.4328" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E86225"/>
      <stop offset="1" stop-color="#F2A22B"/>
    </linearGradient>
  </defs>
</svg>`;

  const defaultPhoto = [
    {
      path: require('../assets/ListingDetails.png'),
      defaultPath: require('../assets/ListingDetails1.png'),
      id: 1,
    },
  ];

  const agent1 = [
    {
      path: require('../assets/agent1.png'),
    },
  ];
  const agent2 = [
    {
      path: require('../assets/agent2.png'),
    },
  ];

  const agent3 = [
    {
      path: require('../assets/agent3.png'),
    },
  ];

  const price = {
    defaultPrice: '$1,121,000',
  };

  const address = {
    defaultAddress: '27 Rosewood Drive/Woodlands Avenue',
  };

  const propertyType = {
    defaultPropertyType: 'HDB',
  };

  const subPropertyType = {
    defaultSubPropertyType: '4 Room',
  };

  const floorSize = {
    defaultFloorSize: '145 sqm',
  };

  const completion = {
    defaultCompletion: 2018,
  };

  const tenure = {
    defaultTenure: '99 Years',
  };

  const updated = {
    defaultUpdated: '2 days ago',
  };

  const area = {
    defaultArea: 145,
  };

  const bedroom = {
    defaultBedroom: 4,
  };

  const bathroom = {
    defaultBathroom: 2,
  };

  const frame = {
    defaultFrame: 4,
  };

  return (
    <ScrollView>
      <View style={style.imageContainer}>
        <ImageBackground
          source={defaultPhoto[0].path || defaultPhoto[0].defaultPath}
          resizeMode="stretch"
          style={style.image}>
          <View style={style.topIcons}>
            <TouchableOpacity style={style.circleBack} onPress={()=> navigation.popToTop()}>
              <SvgXml xml={chevronLeft} width="100%" height="100%" />
            </TouchableOpacity>
            <View style={{flex: 1}} />
            <TouchableOpacity style={style.circleEdit}>
              <SvgXml xml={pencilIcon} width="100%" height="100%" />
            </TouchableOpacity>
            <TouchableOpacity style={style.circleRemove}>
              <SvgXml xml={trashIcon} width="100%" height="100%" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={style.bottomContainer}>
        <View style={style.mainCointainer}>
          <View style={style.rectangle1}>
            <View style={style.singpassContainer}>
              <SvgXml xml={verfied} width="15" height="16" />
              <SvgXml xml={union} width="56.667" height="10" />
            </View>
            <Text style={style.priceSection1}>{price.defaultPrice}</Text>
            <View style={style.addressSection}>
              <SvgXml xml={locationIcon} width="6%" height="100%" />
              <Text style={style.addressSection1}>
                {address.defaultAddress}
              </Text>
            </View>
            <View style={style.addressPropertyDetails}>
              <Text style={style.boldText}>{area.defaultArea}</Text>
              <Text style={style.sqmText}>sqm</Text>
              <SvgXml xml={bedIcon} width="5%" height="100%" />
              <Text style={style.boldText1}>{bedroom.defaultBedroom}</Text>
              <SvgXml xml={bathroomIcon} width="5%" height="100%" />
              <Text style={style.boldText1}>{bathroom.defaultBathroom}</Text>
              <SvgXml xml={frameIcon} width="5%" height="100%" />
              <Text style={style.boldText1}>{frame.defaultFrame}</Text>
            </View>
          </View>
          <View style={style.rectangle2}>
            <Text style={style.boldText2}>What’s next?</Text>
            <Text style={style.subText}>
              Get your home ready for what's coming next in post listing
              updates!
            </Text>
            <View style={style.svgContainer}>
            <SvgXml
              xml={rectangle}
              width="100"
              height="120"
          
            />
            </View>


            <View style={style.container2}>
              <SvgXml xml={circleIcon} width="28" height="28" />
              <View style={style.svgContainer1}>
                <SvgXml
                  xml={checkIcon}
                  width="12"
                  height="12"
                />
              </View>
              <Text style={style.subText1}>Price your home</Text>
            </View>
            <View style={style.container3}>
              <SvgXml xml={circleIcon} width="28" height="28" />
              <View style={style.svgContainer1}>
                <SvgXml
                  xml={checkIcon}
                  width="12"
                  height="12"
                />
              </View>
              <Text style={style.subText1}>Add photos & description</Text>
            </View>
            <View style={style.container4}>
              <SvgXml xml={circleHollow} width="28" height="28" />
              <Text style={style.container4Txt}>3</Text>
              <Text style={style.subText2}>Publish listing</Text>
              <View style={style.container5}>
                <Text style={style.comingTxt}>Coming soon</Text>
              </View>
            </View>
          </View>
          <View style={style.rectangle3}>
            <Text style={style.aboutBold}>About this home</Text>
            {/* <LinearGradient
              colors={['#263237', 'rgba(38, 50, 55, 0.00)']}
              start={{x: 0, y: 1}}
              end={{x: 0, y: 0}}
              style={style.gradient}> */}
            <View style={style.gradient}>
              <Text style={style.aboutSubText}>
                Olin at Jade Drive is a 52-storey residential tower that houses
                1,245 units and 318 parking slots. Set to rise at the heart of
                Ortigas Center which can be accessed through major thoroughfares
                and various mass transportation options. Olin at Jade Drive is
                strategically located at the heart of Ortigas Center. It is
                surrounded by multiple mass transportation terminals in the
                vicinity. Moreover, it is conveniently accessible to neighboring
                commercial developments (SM Megamall, The Podium, and Shangri
                -La Plaza), corporate offices and educational institutions which
                makes it an ideal place of dwelling.
              </Text>
            </View>
            {/* </LinearGradient> */}

            <TouchableOpacity style={style.readMoreBtn}>
              <Text style={style.readMore}>Read more</Text>
            </TouchableOpacity>
          </View>

          <View style={style.rectangle4}>
            <View style={style.propertySection}>
              <Text style={style.propertyText}>Property Type</Text>
              <View style={{flex: 1}} />
              <Text style={style.propertyTextBold}>
                {propertyType.defaultPropertyType}
              </Text>
            </View>
            <View style={style.sepator} />
            <View style={style.propertySection}>
              <Text style={style.propertyText}>Sub-Property Type</Text>
              <View style={{flex: 1}} />
              <Text style={style.propertyTextBold}>
                {subPropertyType.defaultSubPropertyType}
              </Text>
            </View>
            <View style={style.sepator} />
            <View style={style.propertySection}>
              <Text style={style.propertyText}>Floor Size</Text>
              <View style={{flex: 1}} />
              <Text style={style.propertyTextBold}>
                {floorSize.defaultFloorSize}
              </Text>
            </View>
            <View style={style.sepator} />
            <View style={style.propertySection}>
              <Text style={style.propertyText}>Completion</Text>
              <View style={{flex: 1}} />
              <Text style={style.propertyTextBold}>
                {completion.defaultCompletion}
              </Text>
            </View>
            <View style={style.sepator} />
            <View style={style.propertySection}>
              <Text style={style.propertyText}>Tenure</Text>
              <View style={{flex: 1}} />
              <Text style={style.propertyTextBold}>{tenure.defaultTenure}</Text>
            </View>
            <View style={style.sepator} />
            <View style={style.propertySection}>
              <Text style={style.propertyText}>Last Updated</Text>
              <View style={{flex: 1}} />
              <Text style={style.propertyTextBold}>
                {updated.defaultUpdated}
              </Text>
            </View>
          </View>
        </View>
        <View style={style.box} />
        <View style={style.mainCointainer}>
          <Text style={style.lastSectionBold}>Need help with selling?</Text>
          <View style={style.lastSection}>
            <View style={style.bookAnAgent}>
              <View style={style.agent}>
                <ImageBackground
                  source={agent1[0].path}
                  resizeMode="contain"
                  style={style.agent1}
                />
                <ImageBackground
                  source={agent2[0].path}
                  resizeMode="contain"
                  style={style.agentRemaining}
                />
                <ImageBackground
                  source={agent3[0].path}
                  resizeMode="contain"
                  style={style.agentRemaining}
                />
              </View>
              <Text style={style.bookAnAgentTxt}>Book an</Text>
              <Text style={style.bookAnAgentTxt1}>agent</Text>
              <View style={style.getStartedContainer}>
                <Text style={style.getStarted}>Get Started</Text>
                <View style={{flex: 1}} />
                <TouchableOpacity>
                  <SvgXml xml={chevronRight} width="20" height="20" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1}} />
            <View style={style.lastSection1}>
              <TouchableOpacity style={style.bookaCall}>
                <Text style={style.phoneIcon}>📞</Text>
                <Text style={style.bookaCallTxt}>Book a call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.whatsApp}>
                <SvgXml xml={whatsAppIcon} width="24" height="24" />
                <Text style={style.whatsAppTxt}>Chat on</Text>
                <Text style={style.whatsAppTxt1}>WhatsApp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  circleBack: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#2632371A',
    backgroundColor: '#FFF',
    height: 32,
    width: 32,
  },
  circleEdit: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#2632371A',
    backgroundColor: '#FFF',
    height: 32,
    width: 32,
    marginRight: 12,
  },
  circleRemove: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#2632371A',
    backgroundColor: '#FFF',
    height: 32,
    width: 32,
  },
  imageContainer: {
    height: 480,
    width: windowWidth,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  topIcons: {
    marginTop: 24,
    marginHorizontal: 24,
    flexDirection: 'row',
  },
  bottomContainer: {
    backgroundColor: '#2632370D',
  },
  mainCointainer: {
    marginHorizontal: 24,
  },
  rectangle1: {
    borderRadius: 12,
    width: '100%',
    height: 118,
    marginTop: -118 / 2,
    padding: 16,
    alignSelf: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
  },
  singpassContainer: {
    height: 20,
    width: 84.16687,
    alignItems: 'center',
    gap: 2.5,
    backgroundColor: '#F4333D',
    borderRadius: 5,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    right: '-3%',
    top: '-9.5%',
  },
  priceSection1: {
    color: '#263237',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26.4,
    letterSpacing: -0.48,
  },
  addressSection: {
    flexDirection: 'row',
    marginTop: 16,
  },
  addressSection1: {
    color: '#263237A6',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 17.5,
    marginLeft: 8,
  },
  addressPropertyDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  boldText: {
    color: '#263237',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 17.5,
  },
  boldText1: {
    color: '#263237',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 17.5,
    marginLeft: 4,
    marginRight: 12,
  },
  sqmText: {
    color: '#26323780',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14.4,
    letterSpacing: -0.12,
    marginLeft: 2,
    marginRight: 12,
  },
  rectangle2: {
    borderRadius: 16,
    width: '100%',
    marginTop: 24,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignSelf: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
  },
  boldText2: {
    color: '#021217',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.2,
  },
  subText: {
    color: '#263237CC',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22.68,
    letterSpacing: -0.14,
    marginTop: 8,
  },
  svgContainer:{
    position: 'absolute',
    left: -20,
    top: 150
        // top: '50%',
  },
  container2: {
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 40,
    alignItems: 'center',
  },
 svgContainer1:{
    position: 'absolute',
    left: 8
 },
  container3: {
    flexDirection: 'row',
    marginBottom: 40,
    alignItems: 'center',
  },
  container4: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container4Txt: {
    color: '#E86225',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 15.4,
    letterSpacing: -0.28,
    position: 'absolute',
    left: 10
  },
  subText1: {
    color: '#263237',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
    marginLeft: 14,
  },
  subText2: {
    color: '#263237A6',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginLeft: 14,
  },
  container5: {
    minHeight: 20,
    paddingVertical: 2,
    paddingHorizontal: 4,
    alignItems: 'center',
    gap: 4,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#2632371A',
    marginLeft: 8,

    //     display: flex;
    // min-height: 20px;
    // padding: 2px 4px;
    // align-items: center;
    // gap: 4px;

    // border-radius: 100px;
    // border: 1px solid var(--Base-Colors-Ink-100, rgba(38, 50, 55, 0.10));
    // background: var(--Base-Colors-Light-900, #FFF);
  },
  comingTxt: {
    color: '#263237CC',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 12,
    letterSpacing: -0.1,
    //     color: var(--Base-Colors-Ink-700, rgba(38, 50, 55, 0.80));
    // font-feature-settings: 'clig' off, 'liga' off;
    // /* Web/EN/Mobile/UI4 */
    // font-family: "Plus Jakarta Sans";
    // font-size: 10px;
    // font-style: normal;
    // font-weight: 500;
    // line-height: 120%; /* 12px */
    // letter-spacing: -0.1px;
  },
  rectangle3: {
    borderRadius: 12,
    width: '100%',
    height: 222,
    marginTop: 24,
    padding: 16,
    alignSelf: 'center',
    backgroundColor: '#FFF',
  },
  aboutBold: {
    color: '#263237',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 19.8,
    letterSpacing: -0.18,
  },

  aboutSubText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22.68,
    letterSpacing: -0.14,
    overflow: 'hidden',
    textAlign: 'justify',
    marginTop: 16,
    color: 'black'

    // color: 'transparent', // This will be overwritten by background-clip
    // backgroundColor: 'transparent', // Background gradient will be applied,
    // backgroundClip: 'text',
  },
  gradient: {
    flex: 1,
    backgroundColor: 'transparent', // This is required for the gradient to be visible
  },
  readMoreBtn: {
    minHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 8,
  },
  readMore: {
    color: '#F25D2B',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 14.4,
    letterSpacing: -0.12,
    marginTop: 8,
  },
  rectangle4: {
    borderRadius: 12,
    width: '100%',
    height: 300,
    marginTop: 24,
    padding: 16,
    alignSelf: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
  },
  propertySection: {
    flexDirection: 'row',
  },
  propertyText: {
    color: '#263237CC',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 17.5,
  },
  propertyTextBold: {
    color: '#021217',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 17.5,
  },
  sepator: {
    width: '100%',
    height: 1,
    backgroundColor: '#2632371A',
    alignSelf: 'center',
    marginVertical: 16,
  },
  box: {
    width: '100%',
    height: 12,
    backgroundColor: '#2632371A',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 24,
  },
  lastSectionBold: {
    color: '#263237',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 19.8,
    letterSpacing: -0.18,
    marginBottom: 16,
  },
  lastSection: {
    flexDirection: 'row',
    marginBottom: 37,
  },
  bookAnAgent: {
    borderRadius: 8,
    // borderWidth: 1,
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: '9%',
    flexDirection: 'column',
    gap: 23,
    width: windowWidth / 2.4,
  },
  agent: {
    flexDirection: 'row',
  },
  agent1: {
    height: 36,
    width: 36,
  },
  agentRemaining: {
    height: 36,
    width: 36,
    marginLeft: -5,
  },
  bookAnAgentTxt: {
    color: '#263237',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 19.8,
    letterSpacing: -0.18,
  },
  bookAnAgentTxt1: {
    color: '#263237',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 19.8,
    letterSpacing: -0.18,
    marginTop: '-20%',
  },
  getStartedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  getStarted: {
    color: '#021217',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14.4,
    letterSpacing: -0.12,
  },
  lastSection1: {
    flexDirection: 'column',
  },
  bookaCall: {
    borderRadius: 8,
    // borderWidth: 1,
    borderBlockColor: '#2632370D',
    backgroundColor: '#F5F7F7',
    padding: 16,
    gap: 8,
    width: windowWidth / 2.5,
    alignItems: 'center',
  },
  phoneIcon: {
    color: '#000',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26.4,
    letterSpacing: -0.48,
  },
  bookaCallTxt: {
    color: '#263237',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16.8,
    letterSpacing: -0.14,
  },
  whatsApp: {
    borderRadius: 8,
    // borderWidth: 1,
    backgroundColor: '#40C351',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
    width: windowWidth / 2.5,
    alignItems: 'center',
    marginTop: 6,
  },
  whatsAppTxt: {
    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16.8,
    letterSpacing: -0.14,
    marginTop: 8,
  },
  whatsAppTxt1: {
    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16.8,
    letterSpacing: -0.14,
    marginTop: '-6%',
  },
});

export default ListingDetails;
