//? this file is for implement the type for the state object in our store, along with the initial value for the state.
import {
   QuestionData,
   getUnansweredQuestions,
   getQuestion,
   postQuestion,
   PostQuestionData,
   postAnswer,
   AnswerData,
   PostAnswerData,
   searchQuestions,
} from './QuestionsData';
//? The Action type is a base type from the core Redux library that contains a type property that we can use to type in our actions.
import {
   Action,
   ActionCreator,
   Dispatch,
   Reducer,
   combineReducers,
   Store,
   createStore,
   applyMiddleware,
} from 'redux';
//? Thunk Action
import thunk, { ThunkAction } from 'redux-thunk';

// interface QuestionsState {
//   readonly loading: boolean;
//   readonly unanswered: QuestionData[] | null;
//   readonly viewing: QuestionData | null;
//   readonly searched: QuestionData[] | null;
//   readonly postedResult?: QuestionData;
//   readonly postedAnswerResult?: AnswerData;
// }

// export interface AppState {
//   readonly question: QuestionsState;
// }

// //? an action interface that will indicate that unanswered questions are being fetched from the server
// //* P/200
// interface GettingUnansweredQuestionsAction
//   extends Action<'GettingUnansweredQuestions'> {}

// interface GettingQuestionAction extends Action<'GettingQuestion'> {}

// export interface GotQuestionAction extends Action<'GotQuestion'> {
//   question: QuestionData | null;
// }

// interface SearchingQuestionsAction extends Action<'SearchingQuestions'> {}

// export interface SearchedQuestionsAction extends Action<'SearchedQuestions'> {
//   questions: QuestionData[];
// }

// interface GettingUnansweredQuestionsAction
//   extends Action<'GettingUnansweredQuestions'> {}

// //? an action for when the unanswered questions have been retrieved from the server.
// export interface GotUnansweredQuestionsAction
//   extends Action<'GotUnansweredQuestions'> {
//   questions: QuestionData[];
// }

// //? this action is for when a question has been posted to the server and we have the response
// export interface PostedQuestionAction extends Action<'PostedQuestion'> {
//   result: QuestionData | undefined;
// }

// export interface PostedAnswerAction extends Action<'PostedAnswer'> {
//   questionId: number;
//   result: AnswerData | undefined;
// }

// //? combine all the action types in a union type
// type QuestionsActions =
//   | GettingUnansweredQuestionsAction
//   | GotUnansweredQuestionsAction
//   | GettingQuestionAction
//   | GotQuestionAction
//   | SearchingQuestionsAction
//   | SearchedQuestionsAction
//   | PostedQuestionAction
//   | PostedAnswerAction;

// //? initial state for the store
// const initialQuestionState: QuestionsState = {
//   loading: false,
//   unanswered: null,
// };

// //? implement the action creator, which will gather unanswered questions
// export const getUnansweredQuestionsActionCreator: ActionCreator<
//   //* explaining thunkAction on P/204
//   ThunkAction<Promise<void>, QuestionData[], null, GotUnansweredQuestionsAction>
// > = () => {
//   return async (dispatch: Dispatch) => {
//     // TODO - dispatch the GettingUnansweredQuestions action
//     const gettingUnansweredQuestionsAction: GettingUnansweredQuestionsAction = {
//       type: 'GettingUnansweredQuestions',
//     };
//     dispatch(gettingUnansweredQuestionsAction);
//     // TODO - get the questions from server
//     const questions = await getUnansweredQuestions();
//     // TODO - dispatch the GotUnansweredQuestions action
//     const gotUnansweredQuestionAction: GotUnansweredQuestionsAction = {
//       questions,
//       type: 'GotUnansweredQuestions',
//     };
//     dispatch(gotUnansweredQuestionAction);
//   };
// };

// //? implement the action creator using the same pattern with 'getUnansweredQuestionActionCenter'
// export const postQuestionActionCreator: ActionCreator<
//   ThunkAction<
//     Promise<void>,
//     QuestionData,
//     PostQuestionData,
//     PostedQuestionAction
//   >
// > = (question: PostQuestionData) => {
//   return async (dispatch: Dispatch) => {
//     const result = await postQuestion(question);
//     const postedQuestionAction: PostedQuestionAction = {
//       type: 'PostedQuestion',
//       result,
//     };
//     dispatch(postedQuestionAction);
//   };
// };

// //? action center for clearing the posted question
// export const clearPostedQuestionActionCreator: ActionCreator<PostedQuestionAction> = () => {
//   const postedQuestionAction: PostedQuestionAction = {
//     type: 'PostedQuestion',
//     result: undefined,
//   };
//   return postedQuestionAction;
// };

// //* P/206-2011
// const questionsReducer: Reducer<QuestionsState, QuestionsActions> = (
//   state = initialQuestionState,
//   action
// ) => {
//   // TODO - Handle the different actions and return new state
//   switch (action.type) {
//     case 'GettingUnansweredQuestions': {
//       // TODO - return new state
//       return { ...state, unanswered: null, loading: true };
//     }
//     case 'GotUnansweredQuestions': {
//       // TODO - return new state
//       return { ...state, unanswered: action.questions, loading: false };
//     }
//     case 'PostedQuestion': {
//       // TODO - return new state
//       return {
//         ...state,
//         unanswered: action.result
//           ? (state.unanswered || []).concat(action.result)
//           : state.unanswered,
//         postedResult: action.result,
//       };
//     }
//     default:
//       neverReached(action);
//   }
//   return state;
// };

// const neverReached = (never: never) => {};

// const rootReducer = combineReducers<AppState>({
//   questions: questionsReducer,
// });

// export function configureStore(): Store<AppState> {
//   const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
//   return store;
// }

interface QuestionsState {
   readonly loading: boolean;
   readonly unanswered: QuestionData[] | null;
   readonly viewing: QuestionData | null;
   readonly searched: QuestionData[] | null;
   readonly postedResult?: QuestionData;
   readonly postedAnswerResult?: AnswerData;
}

export interface AppState {
   readonly questions: QuestionsState;
}

const initialQuestionState: QuestionsState = {
   loading: false,
   unanswered: null,
   viewing: null,
   searched: null,
};

interface GettingUnansweredQuestionsAction
   extends Action<'GettingUnansweredQuestions'> {}

export interface GotUnansweredQuestionsAction
   extends Action<'GotUnansweredQuestions'> {
   questions: QuestionData[];
}

interface GettingQuestionAction extends Action<'GettingQuestion'> {}

export interface GotQuestionAction extends Action<'GotQuestion'> {
   question: QuestionData | null;
}

interface SearchingQuestionsAction extends Action<'SearchingQuestions'> {}

export interface SearchedQuestionsAction extends Action<'SearchedQuestions'> {
   questions: QuestionData[];
}

export interface PostedQuestionAction extends Action<'PostedQuestion'> {
   result: QuestionData | undefined;
}

export interface PostedAnswerAction extends Action<'PostedAnswer'> {
   questionId: number;
   result: AnswerData | undefined;
}

type QuestionsActions =
   | GettingUnansweredQuestionsAction
   | GotUnansweredQuestionsAction
   | GettingQuestionAction
   | GotQuestionAction
   | SearchingQuestionsAction
   | SearchedQuestionsAction
   | PostedQuestionAction
   | PostedAnswerAction;

export const getUnansweredQuestionsActionCreator: ActionCreator<
   ThunkAction<
      Promise<void>,
      QuestionData[],
      null,
      GotUnansweredQuestionsAction
   >
> = () => {
   return async (dispatch: Dispatch) => {
      const gettingUnansweredQuestionsAction: GettingUnansweredQuestionsAction = {
         type: 'GettingUnansweredQuestions',
      };
      dispatch(gettingUnansweredQuestionsAction);
      const questions = await getUnansweredQuestions();
      const gotUnansweredQuestionAction: GotUnansweredQuestionsAction = {
         questions,
         type: 'GotUnansweredQuestions',
      };
      dispatch(gotUnansweredQuestionAction);
   };
};

export const getQuestionActionCreator: ActionCreator<
   ThunkAction<Promise<void>, QuestionData, null, GotQuestionAction>
> = (questionId: number) => {
   return async (dispatch: Dispatch) => {
      const gettingQuestionAction: GettingQuestionAction = {
         type: 'GettingQuestion',
      };
      dispatch(gettingQuestionAction);
      const question = await getQuestion(questionId);
      const gotQuestionAction: GotQuestionAction = {
         question,
         type: 'GotQuestion',
      };
      dispatch(gotQuestionAction);
   };
};

export const searchQuestionsActionCreator: ActionCreator<
   ThunkAction<Promise<void>, QuestionData[], null, SearchedQuestionsAction>
> = (criteria: string) => {
   return async (dispatch: Dispatch) => {
      const searchingQuestionsAction: SearchingQuestionsAction = {
         type: 'SearchingQuestions',
      };
      dispatch(searchingQuestionsAction);
      const questions = await searchQuestions(criteria);
      const searchedQuestionAction: SearchedQuestionsAction = {
         questions,
         type: 'SearchedQuestions',
      };
      dispatch(searchedQuestionAction);
   };
};

export const postQuestionActionCreator: ActionCreator<
   ThunkAction<
      Promise<void>,
      QuestionData,
      PostQuestionData,
      PostedQuestionAction
   >
> = (question: PostQuestionData) => {
   return async (dispatch: Dispatch) => {
      const result = await postQuestion(question);
      const postedQuestionAction: PostedQuestionAction = {
         type: 'PostedQuestion',
         result,
      };
      dispatch(postedQuestionAction);
   };
};

export const clearPostedQuestionActionCreator: ActionCreator<PostedQuestionAction> = () => {
   const postedQuestionAction: PostedQuestionAction = {
      type: 'PostedQuestion',
      result: undefined,
   };
   return postedQuestionAction;
};

export const postAnswerActionCreator: ActionCreator<
   ThunkAction<Promise<void>, AnswerData, PostAnswerData, PostedAnswerAction>
> = (answer: PostAnswerData) => {
   return async (dispatch: Dispatch) => {
      const result = await postAnswer(answer);
      const postedAnswerAction: PostedAnswerAction = {
         type: 'PostedAnswer',
         questionId: answer.questionId,
         result,
      };
      dispatch(postedAnswerAction);
   };
};

export const clearPostedAnswerActionCreator: ActionCreator<PostedAnswerAction> = () => {
   const postedAnswerAction: PostedAnswerAction = {
      type: 'PostedAnswer',
      questionId: 0,
      result: undefined,
   };
   return postedAnswerAction;
};

const questionsReducer: Reducer<QuestionsState, QuestionsActions> = (
   state = initialQuestionState,
   action
) => {
   switch (action.type) {
      case 'GettingUnansweredQuestions': {
         return {
            ...state,
            unanswered: null,
            loading: true,
         };
      }
      case 'GotUnansweredQuestions': {
         return {
            ...state,
            unanswered: action.questions,
            loading: false,
         };
      }
      case 'GettingQuestion': {
         return {
            ...state,
            viewing: null,
            loading: true,
         };
      }
      case 'GotQuestion': {
         return {
            ...state,
            viewing: action.question,
            loading: false,
         };
      }
      case 'SearchingQuestions': {
         return {
            ...state,
            searched: null,
            loading: true,
         };
      }
      case 'SearchedQuestions': {
         return {
            ...state,
            searched: action.questions,
            loading: false,
         };
      }
      case 'PostedQuestion': {
         return {
            ...state,
            unanswered: action.result
               ? (state.unanswered || []).concat(action.result)
               : state.unanswered,
            postedResult: action.result,
         };
      }
      case 'PostedAnswer': {
         return {
            ...state,
            unanswered: action.result
               ? (state.unanswered || []).filter(
                    (q) => q.questionId !== action.questionId
                 )
               : state.unanswered,
            postedAnswerResult: action.result,
         };
      }
      default:
         neverReached(action);
   }
   return state;
};

const neverReached = (never: never) => {};

const rootReducer = combineReducers<AppState>({
   questions: questionsReducer,
});

export function configureStore(): Store<AppState> {
   const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
   return store;
}
