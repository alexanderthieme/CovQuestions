import React from "react";
import { TestResult } from "../../../../testCaseRunner/testCaseRunner";
import { createStyles, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    runResultHeading: {
      fontWeight: "bold",
    },
    runResultSuccess: {
      color: "green",
    },
    runResultError: {
      color: "red",
    },
    paperComponent: {
      padding: 12,
    },
  })
);

type TestCaseResultProps = {
  testResult?: TestResult;
};

export const TestCaseResult: React.FC<TestCaseResultProps> = ({ testResult }) => {
  const classes = useStyles();

  if (testResult === undefined) {
    return null;
  }

  return (
    <Paper className={classes.paperComponent}>
      <div>
        <Typography className={classes.runResultHeading}>{testResult.description}</Typography>
      </div>
      <div>
        {testResult.success ? (
          <Typography className={classes.runResultSuccess}>test run successful</Typography>
        ) : (
          <Typography className={classes.runResultError}>{testResult.errorMessage}</Typography>
        )}
      </div>
    </Paper>
  );
};
