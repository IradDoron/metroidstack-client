const TAGS_DICT = {
  MATERIAL_UI: 'Material-UI',
  REACT: 'React',
  REDUX: 'Redux',
  JAVASCRIPT: 'JavaScript',
};

const BUILDINGS_TYPES_DICT = {
  INFO: 'Info',
  EXERCISE: 'Exercise',
  FORUM: 'Forum',
  DEMOS: 'Demos',
};

const CONTENT_TYPES_DICT = {
  P: 'Paragraph',
  H1: 'Heading 1',
  H2: 'Heading 2',
  H3: 'Heading 3',
  H4: 'Heading 4',
  H5: 'Heading 5',
  H6: 'Heading 6',
  A: 'Link',
  IMG: 'Image',
  UL: 'Unordered list',
  OL: 'Ordered list',
  LI: 'List item',
  HR: 'Horizontal rule',
  BR: 'Break',
  CODE: 'Code',
  INPUT: 'Input',
  TEXTAREA: 'Textarea',
  SELECT: 'Select',
  OPTION: 'Option',
  BUTTON: 'Button',
  FORM: 'Form',
  TABLE: 'Table',
  THEAD: 'Table head',
  TBODY: 'Table body',
  TR: 'Table row',
  TD: 'Table cell',
  TH: 'Table header cell',
  TBODY: 'Table body',
  TFOOT: 'Table foot',
};

const states = [
  {
    stateName: 'Front End',
    cities: [
      {
        cityName: 'Material UI',
        cityTags: [TAGS_DICT.MATERIAL_UI],
        cityBuildings: [
          {
            buildingName: 'Buttons',
            buildingType: BUILDINGS_TYPES_DICT.INFO,
            buildingTags: [TAGS_DICT.MATERIAL_UI],
            buildingDescription: 'Buttons',
            buildingAreas: [
              {
                areaName: 'Buttons',
                areaBookmarks: 'buttons',
                areaContent: [
                  {
                    contentType: CONTENT_TYPES_DICT.P,
                    content:
                      'Buttons are used to trigger an action. They are usually used to represent actions in a page, but can also be used to trigger an action in another component.',
                  },
                  {
                    contentType: CONTENT_TYPES_DICT.P,
                    content:
                      'Buttons can be used to trigger an action. They are usually used to represent actions in a page, but can also be used to trigger an action in another component.',
                  },
                  {
                    contentType: CONTENT_TYPES_DICT.P,
                    content:
                      'Buttons can be used to trigger an action. They are usually used to represent actions in a page, but can also be used to trigger an action in another component.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default dbMock;
