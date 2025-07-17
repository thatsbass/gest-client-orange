import mongoose, { Document, Schema } from "mongoose";

enum LogStatusEnum {
  SUCCESS = "SUCCESS",
  NOT_FOUND = "NOT_FOUND",
  INACTIVE = "INACTIVE",
  ERROR = "ERROR",
}

interface ILog extends Document {
  requestIdentifier: string;
  timestamp: Date;
  status: LogStatusEnum;
  message: string;
}

const logSchema = new Schema<ILog>({
  requestIdentifier: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  status: {
    type: String,
    required: true,
    enum: Object.values(LogStatusEnum),
  },
  message: { type: String, required: true },
});

const LogModel = mongoose.model<ILog>("Log", logSchema);

export { ILog, LogModel, LogStatusEnum as LogStatus };
