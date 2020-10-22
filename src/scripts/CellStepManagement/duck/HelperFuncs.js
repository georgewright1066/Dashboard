const HelperFuncs = {
  returnDropDownType: (item) => {
    let type;
    switch (item) {
      case 'Please Select':
        type = null;
        item = 'instruction';
        break;
      case 'Instruction':
        type = 'dropdown';
        item = 'instruction';
        break;
      case 'Validation':
        type = 'nothing';
        item = 'validation';
        break;
      case 'Calibration':
        type = 'nothing';
        item = 'calibration';
        break;
      case 'External':
        type = 'text';
        item = 'external';
        break;
      case 'Stim':
        type = 'text';
        item = 'stim';
        break;
      case 'Cache Page':
        type = 'text';
        item = 'cache';
        break;
      case 'Question':
        type = 'text';
        item = 'question';
        break;
      case 'Embedded':
        type = 'text';
        item = 'embedded';
        break;
      default:
        type = 'Please Select';
        item = 'instruction'
    }
    return { item, type }
  }
}

export default HelperFuncs