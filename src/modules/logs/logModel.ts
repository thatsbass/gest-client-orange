import mongoose, { Document, Schema } from "mongoose";

enum LogStatusEnum {
  SUCCESS = "SUCCESS",
  NOT_FOUND = "NOT_FOUND",
  INACTIVE = "INACTIVE",
  ERROR = "ERROR",
}

interface ILog extends Document {
  phone: string;
  status: LogStatusEnum;
  message: string;
  timestamp: Date;
}

const logSchema = new Schema<ILog>({
  phone: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: Object.values(LogStatusEnum),
  },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const LogModel = mongoose.model<ILog>("Logger", logSchema);

export { ILog, LogModel, LogStatusEnum as LogStatus };
